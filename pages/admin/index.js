import AdminLayout from "../../components/admin/AdminLayout";

export default function Admin() {
    const title = 'Dashboard'

    return (
        <AdminLayout title={title}>
            <div className='border-b-2 border-slate-500 p-5 text-lg'>
                {title}
            </div>
            <div>
                admin panel
            </div>
        </AdminLayout>
    )
}
