
import Image from 'next/image';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function ImageSlider() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true,
      };

    return (
            <div className=' flex items-center justify-center '>
                <Slider   className='w-1/2 mt-10  border-2 ' {...settings}>

                <Image  className='rounded-md mx-auto' src={require('../images/banner1.jpg')} 
                        width={1000} height={550}  />

                <Image className='rounded-md mx-auto ' src={require('../images/banner2.jpg')} 
                        width={1000} height={550}    />

                <Image className='rounded-md mx-auto ' src={require('../images/banner3.jpg')} 
                        width={1000} height={550}  />
                
                <Image className='rounded-md mx-auto ' src={require('../images/banner4.jpg')} 
                        width={1000} height={550}   />

                </Slider>
       </div>
    )
}




