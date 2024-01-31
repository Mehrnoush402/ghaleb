import React from 'react'
import ProductPicture from './ProductPicture'
import ProducsExplain from './ProducsExplain'
import UseModal from '../../../hooks/UseModal'
import { createPortal } from 'react-dom'
import Modal from '../../base/Modal'
const ProductCart = ({children,src,cost,productName,materialProduct,classProduc,productCartId,pictureStyle,explainStyle,isOpen,starFix,handleOpen}) => {
 
  return (
   <>
    <div className={`${classProduc} md:w-[45%] sm:w-full rounded`}>
      <ProductPicture isOpen={isOpen} src={src} keyid={productCartId} pictureStyle={pictureStyle} handleOpen={handleOpen}/>
      <ProducsExplain starFix={starFix} cost={cost} productName={productName} materialProduct={materialProduct} keyid={productCartId} explainStyle={explainStyle}/>
      {children}
    </div>
   
   </>
  )
}

export default ProductCart