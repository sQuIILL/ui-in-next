import Layout from '../components/Layout'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import { SWRConfig } from 'swr'
import PropTypes from 'prop-types'
import fetcher from '../app/fetcher'
import ImageGallery from 'react-image-gallery';
import Recomended from "../components/Recomendations"

const mainBanners = [
  {
    original: '/1.jpg',
  },
  {
    original: '/2.jpg',
  },
  {
    original: '/3.jpg',
  },
]

export async function getServerSideProps() {
  const categories = await fetcher(`/categories.json`)
  const featuredProducts = (await fetcher(`/products.json?featured=true`))

  return {
    props: {
      fallback: {
        '/categories.json': categories,
        "/products.json?featured=true": featuredProducts,
      }
    }
  }
}

export default function Home({ fallback }) {
  const dispatch = useDispatch();

  return (
    <SWRConfig value={{ fallback }}>
      <Layout>
        <div className='md:w-7/8 sm:w-11/12 mx-auto lg:w-6/7 xl:w-5/6'>
          <div className='grid grid-cols-5 justify-items-center ' >
            <div className="md:col-span-3 col-span-5">
              <ImageGallery items={mainBanners} showNav={false} autoPlay={true} showPlayButton={false} showThumbnails={false} showFullscreenButton={false} ></ImageGallery>

            </div>
            <div className={` grid md:col-span-2 grid-rows-2 col-span-5`}>
              <div className="grid grid-cols-2">
                <div className="p-1 ">
                  <Link href="#"><img src="rybka.jpg" className='h-full'></img></Link>
                </div>
                <div className="p-1">
                  <Link href="#"><img src="rybka.jpg" className='h-full'></img></Link>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="p-1">
                  <Link href="#"><img src="rybka.jpg" className='h-full'></img></Link>
                </div>
                <div className="p-1">
                  <Link href="#"><img src="rybka.jpg" className='h-full'></img></Link>
                </div>
              </div>
            </div>
          </div>
          <div className=''>
            <div style={{ margin: "15px 0 20px", fontSize: "22px" }}><span ><b>Nasze rekomendacje</b></span></div>
            <Recomended></Recomended>
          </div>
          <div className=''>
            <div style={{ margin: "15px 0 20px", fontSize: "22px" }}><span ><b>Wyróżnione</b></span></div>
            <div className='grid grid-cols-4 '>
              <div className='mx-auto'>
                <div className="w-full">
                  <div className="bg-teal-500 w-20 h-48 mx-auto">
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
            </div>
          </div>
          <div className=''>
            <div style={{ margin: "15px 0 10px", fontSize: "22px" }}><span ><b>Opis sklepu</b></span></div>
            <div className="w-full text-center pb-2">
                <h1 className='font-bold text-4xl'>nazwa firmy</h1><br/>
                <span className='font-semibold text-2xl'>Od kilku lat gwarantujemy komfort i bezpieczeństwo!<br/></span><br/>
                <span className='font-medium text-semibold'>Dlaczego warto wybrać naszą firmę ?<br/></span>
                Posiadamy wieloletnie doświadczenie i oferujemy tylko sprawdzone produkty. 
                r<br/>

                <span className='font-medium text-semibold'>AUTORYZOWANY DYSTRYBUTOR<br/></span>
                Jesteśmy autoryzowanym dealerem firm, których produkty oferujemy, a Ty masz pewność co do jakości zamawianego towaru.<br/><br/>

                <span className='font-medium text-semibold'>Skontaktuj się z Nami już teraz!<br/></span>
                Z chęcią odpowiemy na wszystkie pytania.
                
            </div>
          </div>
        </div>

      </Layout>
    </SWRConfig>
  )
}

Home.propTypes = {
  fallback: PropTypes.object
}