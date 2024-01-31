import React, { useContext, useEffect, useState } from 'react'
import ProductCart from './ProductCart'
import { useId } from 'react'
import UseFetch from '../../../hooks/UseFetch'
import { DataText } from '../../../views/Home'
import UseModal from '../../../hooks/UseModal'
import { createPortal } from 'react-dom'
import Modal from '../../base/Modal'
import HandleCount from '../../base/HandleCount'
import Size from '../../base/Size'
import DeliveryPolicy from '../DeliveryPolicy'

// import { db } from '../../../config/firebase' // for set data list of firestore/firebase
// import { getDocs,collection } from 'firebase/firestore' // for set data list of firestore/firebase

// import { storage } from '../../../config/firebase' // for set img list of sorage
// import {ref,listAll,getDownloadURL} from "firebase/storage" // for set img list of sorage


const Products = () => {
  const[cacheList]=UseFetch(null)
  const {modalIndex}=useContext(DataText)
  const [openCart,handleOpenCart]=UseModal(false)
  const [sizeindex, setIndex] = useState(0)

 
  // const[list,setList]=useState([]) // for set data list of firestore/firebase
  // const webAppDataCollectionRef =collection(db,"webappdata") // for set data list of firestore/firebase

  // const imagesListRef = ref(storage,"Images/") // for set img list of sorage
  // const [imageList, setImageList] = useState([]) // for set img list of sorage

  // useEffect(() => { // for set data list of firestore/firebase
  //   const fetchData = async ()=>{
  //     try {
  //       const response = await getDocs(webAppDataCollectionRef)
  //       const filteredresponse=response.docs.map((doc)=>
  //       ({
  //         ...doc.data(),
  //         id: doc.id
  //         // id:doc.id+Math.floor(Math.random()*1000).toString(),
  //       }))
  //     // const res=await response.JSON()
  //     setList(filteredresponse)
  //     } catch (error) {
  //       console.log("error:",error);
  //     }
  //   }
  //   fetchData()
   
  // }, [])

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
  
  
  return (
    <div className='w-full flex flex-wrap gap-y-4 mt-6 justify-between'>

      {cacheList?.map((item)=>{ 
       
        return(
          <ProductCart pictureStyle={"w-full h-2/3"} handleOpen={handleOpenCart} explainStyle={"w-full mt-2"} key={item?.id} productCartId={item?.id} src={item?.src} cost={item?.cost} classProduc={"flex flex-col items-center w-[23%]"} productName={item?.name} materialProduct={item?.material}/>
      )})}

       {/* //iterate two list for return one component
        {list?.map((item,index)=>{
        const imgUrl=imageList[index]
        return(
          <ProductCart  key={index} src={imgUrl} cost={item.cost} classProduc={"w-[23%]"} productName={item.name} materialProduct={item.material}/>
      )})} */}

      {cacheList?.map((item,index)=>{
          if (modalIndex==item.productId) {
            return(
              createPortal(
                <Modal keyid={item.productId} sizeIndex={sizeindex} isOpen={openCart} handleOpen={handleOpenCart} isCartOnNav={true}  classModal={"w-[30%] h-[95%] p-3 flex-wrap flex-row-reverse justify-between lg:w-[50%] md:w-[50%] sm:w-[90%]"} classProps={"justify-end items-start"} classModalBody={""} sendCount={""}>
                  
                     <ProductCart starFix={true} isOpen={true} pictureStyle={"w-full h-2/3 md:w-[90%] md:h-[55%] sm:w-[50%] sm:h-[40%]"} explainStyle={"w-full mt-2 md:w-[90%] md:h-[35%] sm:w-[50%] sm:h-[20%]"} key={item.productId} src={item?.src} cost={item?.cost} productName={item?.name} materialProduct={item?.material} classProduc={"flex flex-col items-center w-[70%]"}/>
                     <HandleCount/>
                     <Size onEvent={getIndex}/>
                     <DeliveryPolicy margin={"mt-20"}/>
                     
                  
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