import Link from 'next/link';

function HeaderTop() {
    return (
        <div className='flex text-sm bg-gray-200 font-light items-center flex-nowrap px-20 p-2 '> 
            
				
				<div className='flex flex-1'>
						<h4 className='ml-4 ' >Sell on BuyLowcal</h4>
                            <Link href='/'>
                                <a className='ml-4 hover:underline text-blue-900'> Register Now </a>
                            </Link>
					</div>

					<div className='flex cursor-pointer'>
						<h4  className='ml-4 hover:underline'>Save more on app</h4>
						<h4  className='ml-4 hover:underline'>Guide & Help Center</h4>
						<h4  className='ml-4 hover:underline'>Order Tracking</h4>

						<select className='ml-4 outline-none font-light cursor-pointer bg-transparent'>
							<option className='language'>
								English
							</option>
						</select>

						<select className='ml-4 outline-none font-light bg-transparent cursor-pointer'>
							<option className='currency'>
								USD
							</option>
						</select>

				</div>

        </div>
    )
}

export default HeaderTop
