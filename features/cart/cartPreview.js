import styles from '../../components/Layout.module.css'
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeFromCart } from "./cartSlice"

function CartPreview() {
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
        <div className={`${styles.popover__content} hidden md:block z-50`}>
            <div className={`${styles.popover__message}`}>
                {cartProduct.length === 0 ? (<div className="p-10">Twój koszyk jest pusty</div>) : (
                    <>
                            {cartProduct.map((e, i) => (
                                <div className="grid grid-cols-10 items-center justify-items-center" key={i}>
                                    <div className="col-span-2">
                                        <div style={{ height: "100px", width: "99%", backgroundColor: "black", color: "white" }}>Jotpeg</div>
                                    </div>
                                    <div className='col-span-8'>
                                        <div className='grid grod-rows-2 '>
                                            <div className="row-span-1">
                                                <div className="p-1 uppercase font-medium">{e.name}</div>
                                            </div>
                                            <div className="row-span-1 flex flex-row ">
                                                <div className="w-1/2 justify-evenly">
                                                    <button onClick={() => dispatch(incrementQuantity(e.name))}>
                                                        <b>+</b>
                                                    </button>
                                                    <a className="mx-2 p1-1">{e.quantity}</a>
                                                    <button onClick={() => dispatch(decrementQuantity(e.name))}>
                                                        <b>-</b>
                                                    </button>
                                                </div>
                                                <div className="w-1/2 justify-evenly">{e.value * e.quantity} zł</div>
                                                <button onClick={() => dispatch(removeFromCart(e.name))}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash " viewBox="0 0 16 16">
                                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        <div className='border-t-2 border-grey my-1'>
                            <div className="mt-5">
                                <div className="p-1 grid-cols-2 grid ">
                                    <div className="text-right">
                                        Zamówienia: &nbsp;
                                    </div>
                                    <div className="text-left">
                                        {getTotalPrice()} zł
                                    </div>
                                </div>
                                <div className="p-1 grid-cols-2 grid ">
                                    <div className="text-right">
                                        Dostawa: &nbsp;
                                    </div>
                                    <div className="text-left ">
                                        za darmo
                                    </div>
                                </div>
                                <div className="mt-5 pt-2 grid-cols-2 grid border-t-2 border-grey">
                                    <div className="text-right">
                                        Łącznie brutto: &nbsp;
                                    </div>
                                    <div className="text-left">
                                        {getTotalPrice()} zł
                                    </div>
                                </div>
                                <button className="mt-2 bg-white hover:border-glownyZolty hover:bg-glownyZolty text-gray-800 py-2 px-4 shadow border rounded">
                                    Zamawiam
                                </button>
                            </div>
                        </div></>
                )}
            </div>
        </div>

    )
}

export default CartPreview
