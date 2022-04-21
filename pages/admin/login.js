import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import AdminTextInput from '../../components/admin/form/AdminTextInput';
import AdminButton from '../../components/admin/ui/AdminButton';
import fetcher from '../../app/fetcher';
import Head from 'next/head';
import { useState } from 'react';
import AdminNotification from '../../components/admin/ui/AdminNotification';

const validationSchema = yup.object({
    username: yup
        .string('Twój login')
        .required('Login jest wymagany'),
    password: yup
        .string('Twoje hasło')
        .required('Hasło jest wymagane'),
})

export default function AdminLogin() {
    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const [errorMsg, setErrorMsg] = useState(null)

    const onSubmit = async (values) => {
        try {
            const res = await fetcher(
                `/token/`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(values),
                }
            )

            localStorage.setItem('token',res.access)
            localStorage.setItem('refresh_token',res.refresh)
            window.location.assign('/admin')
            setErrorMsg(null)
        } catch (error) {
            if (error.status === 401) {
                setErrorMsg('Niepoprawne logowanie!')
            } else if (error.status === 405) {
                window.location.assign('/admin')
            } else {
                setErrorMsg(error.info)
            }
        }
    };

    return (
        <>
            <Head>
                <title>Logowanie</title>
            </Head>
            <div className='w-full h-screen flex flex-col items-center justify-center'>
                <div className='w-96 margin-auto bg-slate-200 p-4 rounded shadow-lg border border-slate-500'>
                    <form className="flex flex-col items-center" onSubmit={handleSubmit(onSubmit)}>
                        <div className='text-slate-700 text-xl m-4'>
                            Panel admina
                        </div>
                        <AdminTextInput
                            label="Login"
                            name="username"
                            errorMsq={errors.username?.message}
                            isRequired
                            register={register}
                            />
                        <AdminTextInput
                            label="Hasło"
                            name="password"
                            errorMsq={errors.password?.message}
                            isRequired
                            register={register}
                            type="password"
                            />
                        <AdminButton type="submit" label="Zaloguj" />
                    </form>
                </div>
                <AdminNotification
                    isShow={!!errorMsg}
                    setIsShow={() => setErrorMsg(null)}
                    msg={errorMsg}
                    />
            </div>
        </>
    )
}