import Layout from "../../components/Layout";
import styles from '../../styles/Home.module.css'
import fetcher from '../../app/fetcher'
import Link from "next/link";
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { add } from '../../features/cart/cartSlice'
import ProducPrices from "../../components/Price"

export async function getServerSideProps(context) {
    const routerData = context.query;
    const categoryNames = routerData.listaProduktow
    const categorySlug = routerData.listaProduktow.join("/");
    const { id: categoria } = (await fetcher(`/categories.json?slug=${categorySlug}`))[0]
    const products = (await fetcher(`/products.json?category=${categoria}`))
    const firms = (await fetcher(`/categories.json?parent_id=${categoria}`))
    const firmy = firms.sort((a, b) => (a.position - b.position)).map(({ id, name }) => ({ id, name }))
    return {
        props: {
            products,
            categorySlug,
            firmy,
            categoryNames,
        }
    }
}

export default function ListaProduktow({ products, categorySlug, firmy, categoryNames }) {
    const router = useRouter()
    const { slug } = router.query
    const [minValue, setInput] = useState('');
    const biggestOriginalPrice = Math.max.apply(Math, products.map(function (o) { return o["purchase_price"]; }));
    const [maxValue, setInput2] = useState(biggestOriginalPrice);
    const dispatch = useDispatch();

    const [checkedState, setCheckedState] = useState([]);

    const handleOnChange = (id, isChecked) => {
        if (isChecked) {
            setCheckedState([].concat(checkedState, id))
        } else {
            setCheckedState(checkedState.filter(e => e !== id))
        }
    };

    const filteredProducts = products
        ?.filter(e => (checkedState.length > 0 ? checkedState.some(c => e.category.split('/').pop() === `${(c)}.json`) : true))
        ?.filter(e => (e["purchase_price"] >= minValue))
        ?.filter(e => (maxValue>0?e["purchase_price"] <= maxValue: true))

    return (
        <Layout>
            <div className="md:w-7/8 sm:w-11/12 mx-auto lg:w-6/7 xl:w-5/6">
                <div className='grid grid-cols-5 my-5'>
                    <div className="col-span-1 hidden md:block mx-auto my-4">
                        <div className="text-lg font-bold text-center">
                            {categoryNames[0].charAt(0).toUpperCase() + categoryNames[0].slice(1)?.replace(/-/g, " ")}
                        </div>
                        {!categoryNames[1] ? null :
                            <div className="my-4 text-md text-center">
                                Producent:&nbsp;<br />
                                <span className="font-semibold text-lg">
                                    {categoryNames[1].charAt(0).toUpperCase() + categoryNames[1].slice(1)?.replace(/-/g, " ")}
                                </span>
                            </div>}
                        <form>
                            <div className="mb-2 my-6">
                                <b>Cena</b>
                                <div className="ml-1">
                                    <div className="p-1">
                                        <input className="mr-1 w-14 rounded" type="number" placeholder="od" min={0}
                                            max={maxValue} onInput={(e) =>
                                                setInput(e.target.value)
                                            } />-

                                        <input className="ml-1 w-14 rounded" type="number" placeholder="do" min={minValue >= 0 ? 0 : minValue}
                                            max={biggestOriginalPrice + 1} onInput={(e) =>
                                                setInput2(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            {categoryNames[1] ? null :
                                <div className="mb-2">
                                    <b>Firmy</b>
                                    <div className="ml-1">
                                        <div>
                                            {firmy.map(({ id, name }, index) => (
                                                <div key={index}>
                                                    <input
                                                        type="checkbox"
                                                        name={name}
                                                        className="mr-1"
                                                        checked={checkedState.some(e => parseInt(e) === parseInt(id))}
                                                        value={id}
                                                        onChange={(event) => handleOnChange(event.target.value, event.target.checked)}
                                                    />
                                                    {name}
                                                </div>
                                            ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            }
                        </form>
                    </div>
                    <div className="col-span-5 md:col-span-4">
                        <div className="grid md:grid-cols-4 lg:grid-cols-5 grid-cols-3 ">
                            {
                                filteredProducts
                                    ?.map((e, key) => (
                                        <div key={key} className='mx-auto my-2 flex flex-col justify-between'>
                                            <div className="w-full">
                                                <div className="bg-teal-500 w-20 h-48 mx-auto top-0">
                                                    zdjecie
                                                </div>
                                            </div>
                                            <div className="text-center p-1">{e.name}</div>

                                            <div className="flex flex-col items-center p-1">
                                                <div className="text-center pb-1 place-self-stretch">
                                                    <ProducPrices pucharsePrice={e.purchase_price} oryginalPrice={e.original_price}></ProducPrices>
                                                </div>
                                                <Link href={`/[productPage]`} as={`/${e.slug}`} passHref>
                                                    <button className="bg-white hover:border-glownyZolty hover:bg-glownyZolty text-gray-800 py-1 px-2 shadow border rounded text-base">
                                                        Zobacz produkt
                                                    </button>
                                                </Link>
                                                <button onClick={() => dispatch(add({
                                                    name: e.name,
                                                    value: e.purchase_price,
                                                }))}
                                                    className="bg-white hover:border-glownyZolty hover:bg-glownyZolty text-gray-800 py-1 px-2 mt-1 shadow border rounded text-base">
                                                    Dodaj do koszyka
                                                </button>
                                            </div>
                                        </div>
                                    ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    )
}

ListaProduktow.propTypes = {
    products: PropTypes.array,
    categorySlug: PropTypes.string,
    firmy: PropTypes.array,
    categoryNames: PropTypes.array,
}