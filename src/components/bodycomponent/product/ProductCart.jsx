import React from 'react'
import ProductPicture from './ProductPicture'
import ProducsExplain from './ProducsExplain'

const ProductCart = ({starClass,productData,isAdded,starFixInAddList,fixStar,cartIndex,children,src,cost,productName,materialProduct,classProduc,productCartId,pictureStyle,explainStyle,isOpen,handleOpen}) => {
 
  return (
   <>
    <div className={`${classProduc} md:w-[45%] md:items-center md:p-3 sm:w-[50%] rounded`}>
      <ProductPicture isOpen={isOpen} productData={productData} isAdded={isAdded} cartIndex={cartIndex} src={src} keyid={productCartId} pictureStyle={pictureStyle} handleOpen={handleOpen}/>
      <ProducsExplain starClass={starClass} fixStar={fixStar}  starFixInAddList={starFixInAddList} cost={cost} productName={productName} materialProduct={materialProduct} keyid={productCartId} explainStyle={explainStyle}/>
      {children}
    </div>
   
   </>
  )
}

export default ProductCart