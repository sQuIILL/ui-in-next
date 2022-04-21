import React from 'react'
import fetcher from '../app/fetcher'
import useSWR from 'swr';
import ProductPrices from "../components/Price"
import Link from 'next/link';
import styles from "../components/Layout.module.css";

function Recomendations() {
    const { data: featuredProducts } = useSWR('/products.json?featured=true', fetcher)

    return (
        <>
            <div className={styles.slider}>
                <div className={`${styles.slides} overflow-y-hidden`}>
                    {
                        featuredProducts.splice(0, 25)
                            ?.map((e, key) => (
                                <div key={key} className="flex flex-col ">
                                    <div className="w-full">
                                        <div className="bg-teal-500 mx-auto top-0">
                                            zdjecie
                                        </div>
                                    </div>
                                    <div className="text-center text-base px-1">{e.name}</div>
                                    {e["original_price"] === 0 ? null :
                                        <b className="text-base line-through">{e["original_price"] / 100} zł</b>
                                    }
                                    <b className="text-base">{e["purchase_price"] / 100} zł</b>
                                    <div className='flex flex-row pb-2'>
                                        <Link href={`/[productPage]`} as={`/${e.slug}`} passHref>
                                            <button className=" float-left bg-white hover:border-glownyZolty hover:bg-glownyZolty text-gray-800 py-1 px-2 mt-1 shadow border rounded text-base">
                                                Zobacz produkt
                                            </button>
                                        </Link>
                                        <button onClick={() => dispatch(add({
                                            name: e.name,
                                            value: e.purchase_price,
                                        }))}
                                            className="float-right bg-white hover:border-glownyZolty hover:bg-glownyZolty text-gray-800 py-1 px-2 mt-1 shadow border rounded text-base">
                                            Dodaj do koszyka
                                        </button>
                                    </div>
                                </div>
                            ))
                    }
                </div>

            </div>
        </>

    )
}

export default Recomendations
