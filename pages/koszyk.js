import Layout from "../components/Layout";
import styles from '../styles/Home.module.css'
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeFromCart } from "../features/cart/cartSlice"

export default function ShoppingCart() {
    const cartProduct = useSelector((state) => {
        return state.cart.products
    })
    const dispatch = useDispatch();

    const getTotalPrice = () => {
        return cartProduct.reduce(
            (accumulator, item) => accumulator + item.quantity * item.value,
            0
        );
    };

    return (
        <Layout>
            <div className="md:w-7/8 sm:w-11/12 mx-auto lg:w-6/7 xl:w-5/6">
                <div className='grid grid-cols-8 my-5'>
                    <div className="md:col-span-5 col-span-8">
                        <a className="font-semibold text-2xl">Koszyk</a>
                        {cartProduct.length !== 0 ? (
                            cartProduct.map((e, i) => (
                                <div className="grid grid-cols-10 items-center justify-items-center my-1" key={i}>
                                    <div className="col-span-2">
                                        <div style={{ height: "100px", width: "99%", backgroundColor: "black", color: "white" }}>Jotpeg</div>
                                    </div>
                                    <div className="col-span-3">
                                        <div className="p-1 uppercase font-medium">{e.name}</div>
                                    </div>
                                    <div className="col-span-2 ">
                                        <button onClick={() => dispatch(incrementQuantity(e.name))}>
                                            <b>+</b>
                                        </button>
                                        <a className="mx-2 p1-1">{e.quantity}</a>
                                        <button onClick={() => dispatch(decrementQuantity(e.name))}>
                                            <b>-</b>
                                        </button>
                                    </div>
                                    <div className="col-span-2">{e.value * e.quantity} zł</div>
                                    <div className="col-span-1">
                                        <button onClick={() => dispatch(removeFromCart(e.name))}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash mt-1" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (<div className="col-span-10 items-center text-center">Twój koszyk jest pusty</div>)}
                    </div>
                    <div className="md:col-span-3 col-span-8 w-full min-w-266 h-full bg-gornaStopka p-10">
                        <div className="font-semibold text-2xl mx-auto">Podsumowanie:</div>
                        <div className="p-1 grid-cols-2 grid ">
                            <div className="text-right">
                                Zamówienia: &nbsp;
                            </div>
                            <div className="text-left">
                                192 zł
                            </div>
                        </div>
                        <div className="p-1 grid-cols-2 grid ">
                            <div className="text-right">
                                Dostawa: &nbsp;
                            </div>
                            <div className="text-left border-b-2 border-black">
                                za darmo

                            </div>
                        </div>
                        <div className="pt-10 grid-cols-2 grid ">
                            <div className="text-right">
                                Łącznie brutto: &nbsp;
                            </div>
                            <div className="text-left align-center">
                                {getTotalPrice()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
