import React from 'react'
import Layout from "../components/Layout";
import Link from 'next/link';
function login() {
  return (
    <Layout>
      <div className="md:w-7/8 sm:w-11/12 mx-auto lg:w-6/7 xl:w-5/6">
        <div className="pt-2 font-semibold text-2xl">Zaloguj się do swojego konta</div>
        <form className='my-5 p-5 w-1/2 mx-auto'>
          <div className='grid grid-cols-1 justify-items-center'>
            <div className="p-1">
              E-mail
              <input
                required
                type="name"
                name="name"
                id="price"
                className="p-2 w-full focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="p-1">
              Hasło
              <input
                required
                type="password"
                name="password"
                id="price"
                className="p-2 w-full focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className='p-2'>
              Nie pamiętasz hasła?
            </div>
            <button type="submit" value="Send" className="bg-white hover:border-glownyZolty hover:bg-glownyZolty text-gray-800 py-2 px-4 shadow border rounded">
              Zaloguj
            </button>
          </div>
        </form>
        <div className='w-1/2 mx-auto'>
          <div className='grid grid-cols-1 justify-items-center pb-10'>
            Nie masz jeszcze konta?
            <Link href="/registration" passHref>
            <button type="submit" value="Send" className="w-1/2 bg-white hover:border-glownyZolty hover:bg-glownyZolty text-gray-800 py-2 px-4 shadow border rounded">
              Zarejestruj się!
            </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default login