import React from 'react'
import Layout from "../components/Layout";

function MojeDane() {
    return (
        <Layout>
            <div className="md:w-7/8 sm:w-11/12 mx-auto lg:w-6/7 xl:w-5/6">
                <div className="pt-4 font-semibold text-2xl">Historia zamówień</div>
                <div className='shadow-lg px-8 py-12 rounded m-10 md:w-1/2 w-full mx-auto text-center'>
                    Nie złożyłeś jeszcze żadnego zamówienia
                </div>
            </div>
        </Layout>
    )
}

export default MojeDane