import Navbar from './Navbar'
import styles from './Layout.module.css'
import Link from 'next/link'
import CartPreview from '../features/cart/cartPreview'
import { Divide as Hamburger } from 'hamburger-react'
import { useState, useEffect } from 'react'
import useSWR from 'swr';
import fetcher from '../app/fetcher'

function simplifyCategories(categories) {
    const baseCategoryId = categories.find(e => e.parent_id === null).id
    const rootCategories = categories.filter(e => e.parent_id === baseCategoryId).sort((a, b) => a.position - b.position)
    return rootCategories.map(rootCategory => ({
        ...rootCategory,
        subCategories: categories.filter(subCategory => subCategory.parent_id === rootCategory.id)
    }));
}

export default function Header() {
    const [isActive, setActive] = useState(false);

    const { data } = useSWR('/categories.json', fetcher)
    const categories = data ? simplifyCategories(data) : []
    return (

        <header className={styles.header} >
            <div className="basis-full min-w-full container bg-gornaStopka">
                <div className='md:w-7/8 sm:w-11/12 mx-auto lg:w-6/7 xl:w-4/6'>
                    <div className="grid grid-cols-8 mb-30 text-sm text-black p-3 text-center items-center">
                        <div className="col-span-8 sm:col-span-4">
                            Gwarancja najniższej ceny - Natychmiastowa wysyłka - 14 dni na zwrot
                        </div>
                        <div className="col-span-4 sm:col-span-2">
                            <div className='grid grid-rows-2'>
                                <b>+48 000 000 049</b>
                                <b>+48 000 000 048 </b>
                            </div>
                        </div>
                        <div className="col-span-4 sm:col-span-2">
                            <b>kontakt@gmail.com</b>
                        </div>
                    </div>
                    <div className="flex items-center justify-center md:mt-5 pb-2">
                        <div className="basis-1/12 md:hidden float-left">
                            <div className={styles.navbar2}>
                                <div className={`${styles.nav_container}`}>
                                    <div className={`${styles.menuIcon} z-50`}>
                                        <Hamburger toggled={isActive} toggle={setActive} />
                                    </div>
                                    <div className={`${styles.menu_items} ${isActive ? styles.menu_itemsTransformation : null} z-20 left-0 sm:left-4vw h-screen sm:mt-110px mt-60px`}>
                                        <div className='text-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" className='mt-4 ml-4' fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => setActive(false)}>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                            <div className={`${styles.dropdown1} grid grid-cols-1 content-around`} >
                                                {categories?.map((categorry, key) => (
                                                    <>
                                                        <a href="javascript:void(0)">
                                                            <Link href={`/kategorie/${categorry.slug}`} passHref >
                                                                <div onClick={() => setActive(false)} className="inline">
                                                                    {categorry.name}
                                                                </div>
                                                            </Link>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="float-right b-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                            </svg>
                                                        </a>
                                                        <div className={styles.dropdown_menu} onClick={() => setActive(false)}>
                                                            {categorry?.subCategories?.map((subCategory, keyx) => (
                                                                <Link key={keyx} href={`/kategorie/${subCategory.slug}`} >
                                                                    {subCategory.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </>
                                                ))}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="basis-2/12">
                            <Link href="/" passHref>
                                <div className={`${styles.czarnyBox} mx-auto`}></div>
                            </Link>
                        </div>
                        <div className="basis-4/12 hidden md:block grow">
                            <div className="flex items-center justify-center">
                                <div className="flex border-2 rounded">
                                    <input type="text" className="px-4 py-2 w-80 " placeholder="Search..." />
                                    <button className="flex items-center justify-center px-4 border-l">
                                        <svg className="w-6 h-6 text-gray-600 hover:fill-glownyZolty" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24" >
                                            <path
                                                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="basis-1/3 grow"></div>
                        <div className="basis-3/12 flex flex-row float-right">
                            <div className="basis-1/3">
                                <div className={`${styles.popover__wrapper} md:relative`}>
                                    <Link href="/koszyk" passHref>
                                        <svg className={`${styles.popover__title} hover:fill-glownyZolty`} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z" />
                                        </svg>
                                    </Link>
                                    <div className="text-sm ">
                                        koszyk
                                    </div>
                                    <CartPreview />
                                </div>
                            </div>
                            <div className="basis-1/3">
                                <button>
                                    <Link href="/login" passHref>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="hover:fill-glownyZolty" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                        </svg>
                                    </Link>
                                    <div className="text-sm">
                                        konto
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Navbar />
            </div>
        </header>
    )
}