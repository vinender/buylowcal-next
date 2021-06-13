import Products from './Products.js';
import ProductCard from './ProductCard.js';

export default function FlashDealProducts() {
    return (
        <div className='flex flex-col'>

            <div className='flex '>
                <h2 className='font-bold text-md ml-7'> Flash Deals </h2>
                <span className='text-sm  ml-4 font-light text-gray-400 '> Ends in </span>
                <span className='px-3 ml-4 bg-red-700 text-white font-medium'> 10 hours</span>
            </div>

            <div className=' flex max-w-full justify-around mt-5 overflow-x-scroll'>

                {Products.map(product => (
                    <ProductCard image        ={product.image}
                                    title        ={product.title}
                                    discount     ={product.discount}
                                    currentPrice ={product.currentPrice}
                                    basePrice    ={product.basePrice}/>
                ))}

            </div>

        </div>
    )
}
