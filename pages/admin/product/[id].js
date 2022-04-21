import AdminLayout from "../../../components/admin/AdminLayout";
import { useRouter } from 'next/router'
import useSWR, { useSWRConfig } from 'swr'
import fetcher from '../../../app/fetcher'
import * as yup from 'yup';
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import AdminTextInput from "../../../components/admin/form/AdminTextInput";
import AdminTextarea from "../../../components/admin/form/AdminTextarea";
import AdminButton from "../../../components/admin/ui/AdminButton";

const validationSchema = yup.object({
    name: yup
      .string('Nazwa produktu')
      .required('Nazwa jest wymagana')
      .min(2)
      .max(256),
    slug: yup
        .string('Url produktu')
        .required('Url jest wymagany')
        .matches(/^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/, 'Niepoprany format')
        .min(2)
        .max(256),
    description: yup
        .string(),
    short_description: yup
        .string(),
    purchase_price: yup
        .number(),
    original_price: yup
        .number(),
    meta_keywords: yup
        .string(),
    meta_description: yup
        .string(),
    // category: yup
    featured: yup
        .bool(),
    active: yup
        .bool(),
    position: yup
        .number(),
});

export default function ProductEdit() {
    const router = useRouter()
    const { id } = router.query

    const { data: productData } = useSWR(`/products/${id}.json`, fetcher)
    console.log('productData', productData);

    const { mutate } = useSWRConfig()

    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });

    useEffect(() => {
        if (productData) {
            setValue('name', productData.name);
            setValue('slug', productData.slug);
            setValue('description', productData.description);
        }
    }, [productData])

    const onSubmit = async (values) => {
        console.log('values', values)

        mutate(`/products/${id}.json`, values, false)

        await fetcher(
            `/products/${id}.json`,
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...productData, ...values }),
            }
        );

        mutate(`/products/${id}.json`)
    };

    const [title, setTitle] = useState('Edycja produktu')

    useEffect(() => {
        if (productData) {
            setTitle(`Produkt: ${productData.name}`)
        }
    }, [productData])

    return (
        <AdminLayout title={title}>
             <div className='border-b-2 border-slate-500 p-5 text-lg'>
                {title}
            </div>
            <div className='p-5'>
                {productData && (
                    <form className="w-full max-w-full" onSubmit={handleSubmit(onSubmit)}>
                        <AdminTextInput
                            label="Nazwa produktu"
                            name="name"
                            errorMsq={errors.name?.message}
                            isRequired
                            register={register}
                            />
                        <AdminTextInput
                            label="Url produktu"
                            name="slug"
                            errorMsq={errors.slug?.message}
                            isRequired
                            register={register}
                            />
                        <AdminTextarea
                            label="Opis produktu"
                            name="description"
                            errorMsq={errors.description?.message}
                            isRequired
                            register={register}
                            />
                        <div className="md:flex md:items-center mb-3">
                            <div className="md:w-1/3"></div>
                            <div className="md:w-2/3 md:items-end place-items-end">
                                <AdminButton type="submit" label="Zapisz" />
                            </div>
                        </div>
                  </form>
                )}
            </div>
        </AdminLayout>
    )
}
