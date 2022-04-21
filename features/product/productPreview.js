import React from 'react';

function productPreview() {
    return (
        <div className='mx-auto pb-2'>
            <div className="w-full">
                <div className="bg-teal-500 w-20 h-32 mx-auto">
                    zdjecie
                </div>
            </div>
            <div className="text-center p-1">Nazwa produktu</div>
            <div className="text-center pb-1">
                <b>Cena produktu</b>
            </div>
            <button className="bg-white hover:border-glownyZolty hover:bg-glownyZolty text-gray-800 py-2 px-4 shadow border rounded">
                Dodaj do koszyka
            </button>
        </div>
    );
}

export default productPreview;
