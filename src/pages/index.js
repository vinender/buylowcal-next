import Head from 'next/head';
import HeaderTop from '../components/Header/HeaderTop';
import HeaderMiddle from '../components/Header/HeaderMiddle';
import ImageSlider from '../components/Banner/ImageSlider';
import TopCategoriesProducts from '../components/productSection/TopCategoriesProducts';
import FlashDealProducts from '../components/productSection/FlashDealProducts';


export default function Home() {
  return (
    <div className=''>

      <Head>
        <title>localhost</title>
      </Head>

      <HeaderTop/>
      <HeaderMiddle/>
      {/* <HeaderBottom/> */}
      <ImageSlider/>
      <TopCategoriesProducts/>
      <FlashDealProducts/>

     
    </div>
  )
}
