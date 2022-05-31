import React from 'react'

const Product = ({product,OnAdd}) => {
  return (
      
    <div>
   

        <div className="products">
            
        <img className='images' src={product.image} alt="" />
        <h3>{product.name}</h3>
        <h3>${product.price}</h3>
        <button className='btn btn-primary'  onClick={()=> OnAdd(product)}>Add To Cart</button>
        </div>  

    </div>
  )
}

export default Product