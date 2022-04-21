import Layout from "../components/Layout";
import fetcher from '../app/fetcher'
import parse from 'html-react-parser';
import PropTypes from 'prop-types'
import { useDispatch } from "react-redux";
import { addSomeQuantity } from '../features/cart/cartSlice'
import { useState } from "react";
import ImageGallery from 'react-image-gallery';
import ProducPrices from "../components/Price"

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

export async function getServerSideProps(context) {
  const routerData = context.query;
  const productSlug = routerData.productPage.join("/");
  const product = (await fetcher(`/products.json?slug=${productSlug}`))[0]

  return {
    props: {
      product
    }
  }
}

const ProductPage = ({ product }) => {
  const dispatch = useDispatch();
  const [iloscProduku, ustawIlosc] = useState(0);

  return (
    <Layout>
      <div className="md:w-7/8 sm:w-11/12 mx-auto lg:w-6/7 xl:w-5/6">
        <div className='grid grid-cols-6 my-5'>
          <div className="md:col-span-4 col-span-6">
            <ImageGallery items={images} showNav={false} autoPlay={true} showPlayButton={false} thumbnailPosition="left"></ImageGallery>
          </div>
          <div className="md:col-span-2 col-span-4 flex flex-col justify-center items-center col-start-2">
            <div className="p-3 text-center">
              <b className="text-xl">
                {product.name}
              </b>
            </div>
            <ProducPrices pucharsePrice={product.purchase_price} oryginalPrice={product.original_price}></ProducPrices>
            <div className=" m-2">
              <button className="mx-2 font-bold text-xl" onClick={() => ustawIlosc(iloscProduku + 1)}>+</button>
              <span className="bg-white bg-clip-padding border border-solid border-gray-300 p-2 rounded">
                {iloscProduku}
              </span>
              <button className="mx-2 font-bold text-xl" onClick={() => ustawIlosc(iloscProduku <= 1 ? iloscProduku = 1 : iloscProduku - 1)}>-</button>
            </div>
            <button onClick={() => dispatch(addSomeQuantity({
              name: product.name,
              value: product.purchase_price,
              quantity: iloscProduku,
            }))}
              className="bg-white hover:border-glownyZolty hover:bg-glownyZolty text-gray-800 py-1 px-2 mt-1 shadow border rounded text-base">
              Dodaj do koszyka
            </button>

          </div>
        </div>
        <div>
          <div style={{ margin: "15px 0 20px", fontSize: "22px" }}><span ><b>Opis produktu</b></span></div>
          <div className="w-full text-justify pb-2">
            <span>
              {parse(product.description.replace(/(?:\r\n|\r|\n)/g, '<br>'))}
            </span>
          </div>
        </div>
      </div>
      <div className="md:w-3/4 sm:w-11/12 mx-auto my-5">
        <div style={{ margin: "15px 0 20px", fontSize: "22px" }}><span ><b>Nasze rekomendacje</b></span></div>
        <div className='grid grid-cols-4 '>
          <div className='mx-auto'>
            <div className="w-full">
              <div className="bg-teal-500 w-20 h-48 mx-auto">
                zdjecie
              </div>
            </div>
            {/* todo
                1. api for recomendations
                2. map for those products */}
            <div className="text-center p-1">Nazwa produktu</div>
            <div className="text-center pb-1">
              <b>Cena produktu</b>
            </div>
            <button className="bg-white hover:bg-glownyZolty text-gray-800 py-2 px-4 shadow border rounded">
              Dodaj do koszyka
            </button>
          </div><div className='mx-auto'>
            <div className="w-full">
              <div className="bg-teal-500 w-20 h-48 mx-auto">
                zdjecie
              </div>
            </div>
            <div className="text-center p-1">Nazwa produktu</div>
            <div className="text-center pb-1">
              <b>Cena produktu</b>
            </div>
            <button className="bg-white hover:bg-glownyZolty text-gray-800 py-2 px-4 shadow border rounded">
              Dodaj do koszyka
            </button>
          </div><div className='mx-auto'>
            <div className="w-full">
              <div className="bg-teal-500 w-20 h-48 mx-auto">
                zdjecie
              </div>
            </div>
            <div className="text-center p-1">Nazwa produktu</div>
            <div className="text-center pb-1">
              <b>Cena produktu</b>
            </div>
            <button className="bg-white hover:bg-glownyZolty text-gray-800 py-2 px-4 shadow border rounded">
              Dodaj do koszyka
            </button>
          </div><div className='mx-auto'>
            <div className="w-full">
              <div className="bg-teal-500 w-20 h-48 mx-auto">
                zdjecie
              </div>
            </div>
            <div className="text-center p-1">Nazwa produktu</div>
            <div className="text-center pb-1">
              <b>Cena produktu</b>
            </div>
            <button className="bg-white hover:bg-glownyZolty text-gray-800 py-2 px-4 shadow border rounded">
              Dodaj do koszyka
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;

ProductPage.propTypes = {
  product: PropTypes.object
}