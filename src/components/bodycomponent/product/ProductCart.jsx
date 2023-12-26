import React from 'react'
import ProductPicture from './ProductPicture'
import ProducsExplain from './ProducsExplain'
import UseModal from '../../../hooks/UseModal'
import { createPortal } from 'react-dom'
import Modal from '../../base/Modal'
const ProductCart = ({src,cost,productName,materialProduct,classProduc}) => {
 
  return (
   <>
    <div className={`'flex flex-col items-center ${classProduc} md:w-[45%] sm:w-full rounded'`}>
      <ProductPicture src={src}/>
      <ProducsExplain cost={cost} productName={productName} materialProduct={materialProduct}/>
    </div>
   
   </>
  )
}

export default ProductCart