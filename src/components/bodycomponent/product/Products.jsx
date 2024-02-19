import React, { useContext, useEffect, useState } from 'react'
import ProductCart from './ProductCart'
import { DataText } from '../../../views/Home'
import UseModal from '../../../hooks/UseModal'
import { createPortal } from 'react-dom'
import Modal from '../../base/Modal'
import HandleCount from '../../base/HandleCount'
import Size from '../../base/Size'
import DeliveryPolicy from '../DeliveryPolicy'
import { getProducts } from '../../../servicies/productsServicies'



const Products = () => {
  const {addListId,modalIndex,list,setList}=useContext(DataText)
  const [openCart,handleOpenCart]=UseModal(false)
  const [sizeindex, setIndex] = useState(0)
  // const [isAdded, setIsAdded] = useState(true)
  

  useEffect(() => {
     const fetchAllProducts=async()=>{
      try {
        const{data:allProductsData}=await getProducts()
        setList(allProductsData)
      } catch (error) {
        console.log("error",error);
      }
     }
     fetchAllProducts();

     
  }, [])
  
 

  // useEffect(() => { // for set img list of sorage
  //   listAll(imagesListRef).then((response)=>{response.items.forEach((item)=>{
  //     getDownloadURL(item).then((url)=>{
  //       setImageList((prev)=>([...prev,url]))
  //     })
  //   })})
  
   
  // }, [])
   
  const getIndex = (index) =>{ //calback for get index of Size component
    setIndex(index)
 }

//  const getBoolean = (props) =>{ //calback for get boolean of productPicture component
//   console.log("props",props);
//   setIsAdded(props)
// }
  
  
  return (
    <div className='w-full flex flex-wrap gap-y-4 mt-6 justify-between'>

      {list?.map((item,index)=>{ 
       if (addListId.includes(item.id)) {
        return(
          <ProductCart 
            fixStar={false} isAdded={item?.isAddedInCart} productData={item} pictureStyle={"w-full h-2/3 md:w-[60%] sm:w-[70%]"} 
            cartIndex={item.productId}
            handleOpen={()=>handleOpenCart()} 
            explainStyle={"w-full mt-2 md:w-[80%] sm:w-[90%]"} key={item?.id}
            productCartId={item?.id} src={item?.src} cost={item?.cost} 
            classProduc={"flex flex-col items-center w-[23%]"}
            productName={item?.name} materialProduct={item?.material}
          />
      )
       }
       else{
        return(
        <ProductCart 
          fixStar={false}  isAdded={item?.isAddedInCart} productData={item} pictureStyle={"w-full h-2/3 md:w-[60%] sm:w-[70%]"} 
          cartIndex={item.productId}
          handleOpen={()=>handleOpenCart()} 
          explainStyle={"w-full mt-2 md:w-[80%] sm:w-[90%]"} key={item?.id}
          productCartId={item?.id} src={item?.src} cost={item?.cost} 
          classProduc={"flex flex-col items-center w-[23%]"}
          productName={item?.name} materialProduct={item?.material}
        />
    )}
        })}

       {/* //important point:iterate two list for return one component
        {list?.map((item,index)=>{
        const imgUrl=imageList[index]
        return(
          <ProductCart  key={index} src={imgUrl} cost={item.cost} classProduc={"w-[23%]"} productName={item.name} materialProduct={item.material}/>
      )})} */}

      {list?.map((item,index)=>{
          if (index==modalIndex-1) {
            return(
              createPortal(
                <Modal keyid={list[index].id} productData={item} sizeIndex={sizeindex} isOpen={openCart} handleOpen={handleOpenCart} isCartOnNav={true}  classModal={"w-[30%] h-[95%] p-3  flex-wrap flex-row-reverse justify-between lg:w-[50%] lg:h-[60%] md:w-[50%] md:h-[65%] sm:w-[85%] sm:h-[70%]"} classProps={"justify-end items-start"} classModalBody={""} sendCount={""}>
                  
                     <ProductCart fixStar={true} isOpen={true} pictureStyle={"w-full h-2/3 md:w-[90%] md:h-[55%] sm:w-[50%] sm:h-[40%] lg:w-[60%] lg:h-[55%]"} productCartId={item?.id} explainStyle={"w-full mt-2 md:w-[90%] md:h-[35%] sm:w-[70%] sm:h-[20%]"} key={item.productId} src={item?.src} cost={item?.cost} productName={item?.name} materialProduct={item?.material} classProduc={"flex flex-col items-center w-[70%]"}/>
                     <HandleCount handleCountClass={"w-[35%] h-10 sm:w-[25%] h-6"}/>
                     <Size onEvent={getIndex} sizeClass={"w-[60%] sm:w-[40%]"} textSizeClass={"text-xs sm:text-xs sm:py-1"}/>
                     <DeliveryPolicy margin={"mt-20 sm:mt-10"}/>
                     
                  
                </Modal>
                
                ,document.body)

                
            )
          }else{
            return null
          }
      })}
        

    </div>
  )
}

export default Products