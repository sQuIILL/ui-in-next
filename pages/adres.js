import React from 'react'
import Layout from "../components/Layout";
import Link from 'next/link';

function Adres() {
    return (
        <Layout>
            <div className="md:w-7/8 sm:w-11/12 mx-auto lg:w-6/7 xl:w-5/6">
                <div className="pt-4 font-semibold text-2xl">Adres zamówień</div>
                <div className='shadow-lg px-8 py-12 rounded m-10 md:w-1/2 w-full mx-auto'>
                    <form className='p-5 mx-auto grid grid-cols-1 justify-items-center'>
                        <div className="p-1 w-full">
                            Alias
                            <input
                                type="name"
                                name="alias"
                                id="price"
                                className="p-2 w-full focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="p-1 w-full">
                            Imię
                            <input
                                required
                                type="name"
                                name="name"
                                id="price"
                                className="p-2 w-full focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="p-1 w-full">
                            Nazwisko
                            <input
                                required
                                type="name"
                                name="surname"
                                id="price"
                                className="p-2 w-full focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="p-1 w-full">
                            Firma
                            <input
                                type="name"
                                name="firm"
                                id="price"
                                className="p-2 w-full focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="p-1 w-full">
                            NIP UE
                            <input
                                type="name"
                                name="nip"
                                id="price"
                                className="p-2 w-full focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="p-1 w-full">
                            Adres
                            <input
                                required
                                type="name"
                                name="adress"
                                id="price"
                                className="p-2 w-full focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="p-1 w-full">
                            Kod pocztowy
                            <input
                                required
                                type="name"
                                name="ZIP code"
                                id="price"
                                className="p-2 w-full focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="p-1 w-full">
                            Miasto
                            <input
                                required
                                type="name"
                                name="country"
                                id="price"
                                className="p-2 w-full focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="p-1 w-full">
                            Telefon
                            <input
                                type="string"
                                name="phone"
                                id="price"
                                className="p-2 w-full focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        <button type="submit" value="Send" className="bg-white hover:border-glownyZolty hover:bg-glownyZolty text-gray-800 py-2 px-6 shadow border rounded">
                            Zapisz
                        </button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default Adres