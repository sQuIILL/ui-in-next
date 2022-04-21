import AdminLayout from "../../components/admin/AdminLayout";
import useSWR from "swr";
import fetcher from "../../app/fetcher";
import { useEffect, useMemo, useState } from 'react'
import AdminTable from "../../components/admin/table/AdminTable";
import AdminLink from "../../components/admin/ui/AdminLink";
import PropTypes from "prop-types"

export default function AdminProductsList() {
    const [data, setData] = useState([])
    const { data: productsData } = useSWR('/products.json', fetcher)

    useEffect(() => {
        if (productsData && productsData !== data) {
            setData(productsData)
        }
    }, [productsData, data])

    const columns = useMemo(() => [
        {
            Header: 'Id',
            accessor: 'id',
        },
        {
            Header: 'Nazwa',
            accessor: 'name',
        },
        // {
        //     Header: 'Url',
        //     accessor: 'slug',
        // },
        {
            Header: 'Kategoria',
            accessor: 'category',
            Cell: ({ cell }) => {
                return (
                    <span>
                    <>🥳 { cell.value}</>
                    </span>
                )
            },
        },
        // {
        //     Header: 'Aktualna cena',
        //     accessor: (d) => d.purchase_price / 100,
        // },
        {
            Header: 'Cena',
            accessor: (d) => d.original_price / 100,
        },
        {
            Header: 'Wyróżnienie',
            accessor: 'featured',
            Cell: ({ cell }) => {
                if (cell.value) {
                    return (<span className='text-green-700 bg-green-200 rounded-full px-5 py-3 border-green-500 border'>Tak</span>)
                }

                return (<span className='text-red-700 bg-red-200 rounded-full px-5 py-3 border-red-500 border'>Nie</span>)
            }
        },
        {
            Header: 'Status',
            accessor: 'active',
            Cell: ({ cell }) => {
                if (cell.value) {
                    return (<span className='text-green-700 bg-green-200 rounded-full px-5 py-3 border-green-500 border'>Aktywny</span>)
                }

                return (<span className='text-red-700 bg-red-200 rounded-full px-5 py-3 border-red-500 border'>Zawieszony</span>)
            }
        },
        {
            Header: 'Akcje',
            Cell: ({ row }) => {
                return (<AdminLink href={`/admin/product/${row.values.id}`} label="Podgląd" />)
            }
        }
    ])
    const title = 'Produkty'

    return (
        <AdminLayout title={title}>
            <div className='border-b-2 border-slate-500 p-5 text-lg'>
                {title}
            </div>
            <div className='bg-slate-200'>
                <AdminTable columns={columns} data={data} />
            </div>
        </AdminLayout>
    )
}

AdminProductsList.propTypes = {
    cell: PropTypes.object,
    row: PropTypes.object,
  }