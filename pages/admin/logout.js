import { useEffect } from "react"

export default function AdminLogout() {
    useEffect(() => {
        localStorage.removeItem('token')
        window.location.assign('/admin/login')
    }, []);

    return (<></>);
}