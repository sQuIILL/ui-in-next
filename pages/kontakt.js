import Layout from "../components/Layout";

export default function Contact() {
    return (
        <Layout>
            <div className="md:w-7/8 sm:w-11/12 mx-auto lg:w-6/7 xl:w-5/6">
                <div className="pt-2 font-semibold text-2xl">Dane osobowe do kontaktu</div>
                <div className="grid grid-cols-2 ">
                    <div className="col-span-1">
                        <div className="p-5 w-68 ">
                            <div className="text-md uppercase text-gray-500 font-medium text-center">
                                Firma x <br />
                                &quot;XXxx&quot;
                            </div>
                            <div className="block text-center">
                                Jan Kowalski
                            </div>
                            <div className="block text-center">
                                Aleje Krakowskie
                            </div>
                            <div className="block text-center" >
                                30-000 Kraków
                            </div>
                            <div className="block text-center">
                                woj. Małopolskie
                            </div>
                            <div className="block text-center" >
                                NIP: 000-0000-00-00
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 ">
                        <div className="p-5 w-68 ">
                            <div className="text-md uppercase text-gray-500 font-medium text-center">Numery telefonów i e-mail</div>
                            <div className="text-center block">
                                +48 000 000 049
                            </div>
                            <div className="text-center block">
                                +48 000 000 048
                            </div>
                            <div className="text-center block">
                                kontakt@gmail.com
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-2 font-semibold text-2xl">Skontaktuj sie z nami</div>
                <form>
                    <div className='grid grid-cols-6 my-5 items-center'>
                        <div className="md:col-span-3 p-1 col-span-6">
                            <input
                                type="name"
                                name="name"
                                id="price"
                                className="p-2 w-full focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                placeholder="Twoje imię"
                            />
                        </div>
                        <div className="md:col-span-3 p-1 col-span-6">
                            <input
                                required
                                type="email"
                                name="email"
                                id="price"
                                className="p-2 w-full focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                                placeholder="Twój adres email"
                            />
                        </div>
                        <div className="col-span-6 p-1">
                            <textarea
                                name="message"
                                required
                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-paddingborder border-solid border-gray-300 rounded transition m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleFormControlTextarea1"
                                rows="10"
                                placeholder="Twoja wiadomość"
                            ></textarea>
                        </div>
                        <div className="md:col-span-5 ml-1 col-span-6">
                            <div>
                                <input required className="inline form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked"></input>
                                <label className=" form-check-label text-gray-800 text-justify">
                                    {/* regulamin */}
                                </label>
                            </div>
                        </div>
                        <div className="md:col-span-1 mx-auto col-span-8">
                            <button type="submit" value="Send" className="bg-white hover:border-glownyZolty hover:bg-glownyZolty text-gray-800 py-2 px-4 shadow border rounded">
                                Wyślij wiadomość
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    )
}