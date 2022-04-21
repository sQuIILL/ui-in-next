import style from './Layout.module.css'
import Link from "next/link"

export default function Footer() {
    return (
        <footer className={`${style.footer}`} >
            <div className="flex w-full">
                <div className="bottom-0 bg-gray-100 w-full ">
                    <div className="bg-gornaStopka w-full grid grid-cols-6">
                        <div className="text-gray-800 sm:col-span-2 col-span-6">
                            <div className="p-5 w-68 flex-col ">
                                <a className="text-sm uppercase text-gray-500 font-medium">Twój sklep</a>
                                <Link href="/Regulamin.pdf">
                                    <a className="mb-1 text-center block">
                                        Regulamin
                                    </a>
                                </Link>
                                <Link href="/PolitykaPrywatnosci.pdf">
                                    <a className="my-1 text-center block" >
                                        Polityka Prywatności
                                    </a>
                                </Link>
                                <Link href="/KlauzulaInfortmacyjna.pdf">
                                    <a className="my-1 text-center block" >
                                        Klauzula informacyjna
                                    </a>
                                </Link>
                                <Link href="/TwojePrawa.pdf">
                                    <a className="my-1 text-center block" >
                                        Twoje prawa
                                    </a>
                                </Link>
                                <Link href="/Regulamin.pdf">
                                    <a className="my-1 text-center block" >
                                        Skontaktuj sie z nami
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="text-gray-800 sm:col-span-2 col-span-6">
                            <div className="p-5 w-68 flex-col">
                                <a className="text-sm uppercase text-gray-500 font-medium">Obsługa klienta</a>
                                <Link href="/kontakt">
                                    <a className="mb-1 text-center block" >
                                        Skontaktuj sie z nami
                                    </a>
                                </Link>
                                <a className="my-1 text-center block">
                                    +48 000 000 049
                                </a>
                                <a className=" my-1 text-center block">
                                    +48 000 000 049
                                </a>
                                <a className="my-1 text-center block">
                                    kontakt@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="text-gray-800 sm:col-span-2 col-span-6 ">
                            <div className="p-5 w-68 flex-col">
                                <a className="text-sm uppercase text-gray-500 font-medium text-center">
                                    Firma x<br />
                                    &quot;x&quot;
                                </a>
                                <a className="my-1 text-center block">
                                    Jan Kowalski
                                </a>
                                <a className="my-1 text-center block">
                                    Krakow
                                </a>
                                <a className="my-1 text-center block" >
                                    30-000 Krakow
                                </a>
                                <a className="my-1 text-center block">
                                    woj. Małopolskie
                                </a>
                                <a className="my-1 text-center block" >
                                    NIP: 000-000-00-00
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}