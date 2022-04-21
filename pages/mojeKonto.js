import React from 'react'
import Layout from "../components/Layout";
import Link from 'next/link';

function mojeKonto() {
    return (
        <Layout>
            <div className="md:w-7/8 sm:w-11/12 mx-auto lg:w-6/7 xl:w-5/6">
                <div className="pt-4 font-semibold text-2xl">Moje konto</div>
                <div className='grid grid-cols-3 pb-52 pt-32'>
                    <div className='w-full p-5'>
                        <Link href="/mojeDane">
                            <div className='shadow-lg bg-glownyZolty rounded p-4 text-center'>
                                Moje dane
                            </div>
                        </Link>
                    </div>
                    <div className='w-full p-5'>
                        <Link href="/adres">
                            <div className='shadow-lg bg-glownyZolty rounded p-4 text-center'>
                                Pierwszy adres do zamówień
                            </div>
                        </Link>
                    </div>
                    <div className='w-full p-5'>
                        <Link href="/historiaZamowien">
                            <div className='shadow-lg bg-glownyZolty rounded p-4 text-center'>
                                Histroia zamówień
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default mojeKonto