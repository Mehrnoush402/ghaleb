import React from 'react'
import ProductPicture from './ProductPicture'
import ProducsExplain from './ProducsExplain'
import UseModal from '../../../hooks/UseModal'
import { createPortal } from 'react-dom'
import Modal from '../../base/Modal'
const ProductCart = ({src,cost,productName,materialProduct}) => {
  const [openCart,handleOpenCart]=UseModal(false)
  return (
   <>
    <div className='flex flex-col items-center w-[23%] md:w-[45%] sm:w-full border rounded' onClick={handleOpenCart}>
      <ProductPicture src={src}/>
      <ProducsExplain cost={cost} productName={productName} materialProduct={materialProduct}/>
    </div>

{createPortal(
  <Modal isOpen={openCart} handleOpen={handleOpenCart} isCartOnNav={false}  classModal={"w-1/4 flex-col h-full"} classProps={"justify-end items-start"} classModalBody={""}>
    <p>openCart</p>
  </Modal>
  
  ,document.body)}
   
   </>
  )
}

export default ProductCart