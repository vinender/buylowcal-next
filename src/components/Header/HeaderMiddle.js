// import './styles/globals.css'
import Link from 'next/link';
import {SearchIcon} from '@heroicons/react/outline';
import {HeartIcon, ShoppingCartIcon, UserIcon, PhoneIcon, MenuIcon} from '@heroicons/react/outline';


export default function HeaderMiddle() {
    return (
        <div className=' flex justify-evenly  pt-8 pb-6 bg-#E0E0E0 shadow-md'  >


                        <div className=' flex  mt-0'>

                            <MenuIcon className='h-10 items-center  text-gray-800'/> 
                            <h1 className='ml-3 text-2xl '>
                                <span className='text-black-500 font-bold '>Buy</span>
                                <span className='text-green-700 font-bold'>Lowcal</span>
                            </h1>

                        </div>


                    {/* searchbar  */}
                <div className='flex flex-col  px-4'>
                    {/* bars icon */}
                    <div className='flex  focus-ring-2 focus:ring-green-600 items-center'>

                            <input className='  flex-1 rounded-l-lg  bg-white focus:ring-1
                                                focus:ring-green-600  outline-none 
                                                border-2
                                                p-2' 
                                    type='text' placeholder=" I'm searching for..."/>
                           
                            <span><Link href='./categories'>
                                <button className='hover:bg-green-600 hover:text-white border-2 bg-white border-l-0 border-r-0 text-green-700 p-2'> 
                                   Shop by category
                                 </button>
                                </Link>
                            </span>
                        
                           <span className='p-2 border-2  border-l-0 rounded-r-lg hover:bg-green-700 bg-green-500'>
                                <SearchIcon className='h-6 rounded-r-lg   border-r-none  text-white'/>
                           </span>

                    </div>
                    <div className='flex mt-3  items-center divide-x divide-green-600 cursor-pointer '>
                        <h4 className='font-semi-bold text-mdnh'>Trending search:</h4>
                        <h5 className='font-light text-sm  pl-3 ml-3 hover:underline'>meat</h5>
                        <h5 className='font-light text-sm  pl-3 ml-3 hover:underline'>fruit</h5>
                        <h5 className='font-light text-sm  pl-3 ml-3 hover:underline'>vegetable</h5>
                        <h5 className='font-light text-sm  pl-3 ml-3 hover:underline'>salad</h5>
                        <h5 className='font-light text-sm  pl-3 ml-3 hover:underline'>yogurts</h5>
                        <h5 className='font-light text-sm  pl-3 ml-3 hover:underline'>apple</h5>
                        <h5 className='font-light text-sm  pl-3 ml-3 hover:underline'>frozen foods</h5>

                    </div>
                </div>


                    <div className=' hidden sm:inline-flex flex '>

                        <div className='header-phone-icon'>
                            <PhoneIcon className='h-5 text-green-800 mr-4 mt-3 '/>
                        </div>

                        <div className=''>
                            <h3> Hotline delivery</h3>
                            <p className='text-green-700 font-semibold'> 970 978-4322</p>
                        </div>

                    </div>


                    <div className='flex mt-3'>
                    <HeartIcon className='h-5 ml-4'/>
                    <ShoppingCartIcon  className='h-5 ml-4'/>
                    <UserIcon  className='h-5 ml-4'/>

                    </div>

                    <div className='login-register-link'>
                
                    <h3 className='rounded-md bg-green-700 p-2 px-4 text-white cursor-pointer'> Join </h3>
                    </div>

                    </div>

    )
}

