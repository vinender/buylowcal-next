
export default function ProductCard({image, discount, title, basePrice, currentPrice}) {
    return (
        <div className='product-card'>
             
            <span className='discount'>{discount}</span> 
            <img className='img' src={image}/>
            <h3>{currentPrice}<del>{basePrice}</del></h3>
            <h2>{title}</h2>

            <style jsx>{`

            div{
                position: relative:
                border: 6px solid red;
                max-width: 220px;
                min-width: 100px;
                height: 200px;
                display: flex;
                flex-direction: column,
                
            }

                span{
                    position: absolute;
                    top:5;
                    right:5;
                    padding: 0.1rem 0.1rem;
                    border-radius: 2px;
                    background: green;
                    color: white;
                }
                img{
                    width:10rem;
                    height: 10rem;
                }

                 h3 {
                     font-size: 1rem;
                     font-weight:500;
                     color:green;
                     
                }

                del{
                    font-size: 0.7rem;
                    color: lightgrey;
                }

            `}

            </style>
        </div>
    )
}
