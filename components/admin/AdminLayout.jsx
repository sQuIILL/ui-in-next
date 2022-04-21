import { useState } from 'react'
import PropTypes from "prop-types"
import Head from 'next/head'
import AdminAppBar from "./AdminAppBar"
import AdminMenu from './AdminMenu';
import useMe from '../../features/hooks/useMe'
import jwt_decode from 'jwt-decode';
import fetcher from '../../app/fetcher'

export default function AdminLayout({ children, title }) {
    const { me, isError } = useMe()
  const [show, setShow] = useState(false);

    if (isError) {
      console.log(isError)
      window.location.assign('/admin/logout')
    }

    const handleClick = async () => {
      const nowSeconds = Math.floor(Date.now() / 1000);
      const token = localStorage.getItem('token')
      const decoded = jwt_decode(token);

      if (!decoded || decoded.exp - 60 < nowSeconds) {
        const refresh = localStorage.getItem('refresh_token')

        try {
          const res = await fetcher(
              `/token/refresh/`,
              {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({refresh}),
              }
          )

          localStorage.setItem('token',res.access)
        } catch (error) {
          console.log(error)
        }
        return null;
      }
    }

    return (
      <>
        <Head>
          <title>{`Admin: ${title}`}</title>
        </Head>
        {me && (
          <div className="w-full h-full bg-gray-200" onClick={handleClick}>
            <div className="flex flex-no-wrap">
              <AdminMenu show={show} setShow={setShow} />
              <div className="w-full">
                <AdminAppBar show={show} setShow={setShow} />
                <div className="mx-auto">
                  <div className="w-full h-full rounded m-5 bg-slate-100 shadow-md">
                    <main>
                      {children}
                    </main>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    )
}

AdminLayout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object,
    ]),
    title: PropTypes.string,
}