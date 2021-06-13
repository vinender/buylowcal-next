
import Image from 'next/image';
import Link from 'next/link';

export default function TopCategoriesProducts() {

    return (

        <div className='flex flex-col mt-0 p-3 '>

                <div className='flex justify-between px-3'>

                    <h3 className='font-semi-bold text-sm'> Top Categories Product </h3>

                    <Link href='/'>
                        <a className='text-indigo-800 hover:underline font-light text-sm'>View All</a>
                    </Link>

                </div>
            
                <div className=' flex justify-around mt-2  overflow-x-scroll '>

                    <Image className='ml-6 mix-w-24  object-contain rounded-sm' src={require('../images/product1.jpg')}
                    width={300} height={200} />

                    <Image className='ml-6  min-w-24  object-contain rounded-sm' src={require('../images/product1.jpg')}
                                width={300} height={200}  />

                    <Image  className='ml-6  min-w-24  object-contain rounded-sm' src={require('../images/product1.jpg')}
                                width={300} height={200} />

                    <Image className='ml-6  object-contain  min-w-24rounded-sm' src={require('../images/product1.jpg')}
                                width={300} height={200} />

                    <Image className='ml-6  object-contain  min-w-24 rounded-sm' src={require('../images/product1.jpg')}
                                width={300} height={200} />

                    <Image className='ml-6  object-contain min-w-24 rounded-sm' src={require('../images/product1.jpg')}
                                width={300} height={200} />

                    {/* <Image className='ml-6  min-w-24 rounded-sm'  src={require('../images/product1.jpg')}
                                width={300} height={200} />  */}

                    {/* <Image className='ml-6  min-w-24 rounded-sm' src={require('../images/product1.jpg')}
                                width={300} height={200} /> */}

                </div> 


        </div>
  
    )
}
