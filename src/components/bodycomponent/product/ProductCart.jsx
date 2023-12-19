import React from 'react'
import ProductPicture from './ProductPicture'
import ProducsExplain from './ProducsExplain'
const ProductCart = ({src,cost,productName,materialProduct}) => {
  return (
    <div className='flex flex-col items-center w-[23%] md:w-[45%] sm:w-full border rounded'>
      <ProductPicture src={src}/>
      <ProducsExplain cost={cost} productName={productName} materialProduct={materialProduct}/>
    </div>
  )
}

export default ProductCart