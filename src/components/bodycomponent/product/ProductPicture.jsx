import React, { useContext, useState } from 'react'
import SvgIcon from '../../base/SvgIcon'
import Image from '../../base/Image'
import UseModal from '../../../hooks/UseModal'
import { createPortal } from 'react-dom'
import Modal from '../../base/Modal'
import ProductCart from './ProductCart'
import HandleCount from '../../base/HandleCount'
import { DataText } from '../../../views/Home'
import UseFetch from '../../../hooks/UseFetch'
import Size from '../../base/Size'
import DeliveryPolicy from '../DeliveryPolicy'
// import { DataText } from '../../origincomponent/Body'
// import { useContext } from 'react'


const ProductPicture = ({src,keyid,pictureWidth,isOpen}) => {
  const [cacheList]=UseFetch()  // const{counter}=useContext(DataText)
  const [color, setColor] = useState(false)
   const {increaseCount,decreaseCount}=useContext(DataText)
   const [showSvg, setShowSvg] = useState(false)
   const [openCart,handleOpenCart]=UseModal(false)
   const [index, setIndex] = useState(0)
   
  
   const handleShowSvg =()=>{
    setShowSvg(!showSvg)
    
   }
  // const {color,handleColor,handleCount}=useContext(UserContext)
  // const [count, setCount] = useState(0)
  
  // const handleCount =()=>{
  //      setCount(count+1)
  //      console.log(count);
  // }
  const handleCount = () =>{
    color ? decreaseCount():increaseCount()
  }

  const getIndex = (index) =>{ //calback for get index of Size component
     setIndex(index)
  }
  // const setAppear=(color)=>{
  //     console.log("color :",color);
  // }
  return (
    <div className={`relative ${pictureWidth} rounded-lg`} onMouseEnter={handleShowSvg} onMouseLeave={()=>setShowSvg(false)}>

      {/* // for toggle & show heart svg ,bi-cart2 svg in modal and without modal */}
      {!isOpen ? <><div className='absolute rounded-lg inset-0 hover:bg-black hover:opacity-25'></div>
      <Image src={src} width={""} height={""} imgclass={"w-full h-full"}/>

      <div onClick={()=>{setColor(!color),handleCount()}} className='absolute top-3 right-3'>

        {color ? <SvgIcon position={"absolute top-1 right-1"}>
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="red" class="bi bi-heart" viewBox="0 0 16 16">
          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
        </svg>
      </SvgIcon> : <SvgIcon position={"absolute top-1 right-1"}>
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="gray" class="bi bi-heart" viewBox="0 0 16 16">
          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
        </svg>
      </SvgIcon>}
      </div>
      {  showSvg?<SvgIcon position={"absolute top-[45%] right-[45%]"} handleOpenCart={handleOpenCart} >
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="gray" class="bi bi-cart2" viewBox="0 0 16 16">
      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
    </svg>
  </SvgIcon>:null}
      </>:
      <><Image src={src} width={""} height={""} imgclass={"w-full h-full"}/>
      </> 
      }
      
    
    
  {createPortal(
      <Modal keyid={keyid} sizeIndex={index} isOpen={openCart} handleOpen={handleOpenCart} isCartOnNav={true}  classModal={"w-[30%] h-[95%] p-3"} classProps={"justify-end items-start"} classModalBody={""} sendCount={""}>
        
           <ProductCart starFix={true} isOpen={true} pictureWidth={"w-full h-2/3"} explainWidth={"w-full mt-2"} key={keyid} src={cacheList[keyid-1]?.src} cost={cacheList[keyid-1]?.cost} productName={cacheList[keyid-1]?.name} materialProduct={cacheList[keyid-1]?.material} classProduc={"flex flex-col items-center w-[70%]"}/>
           <HandleCount/>
           <Size onEvent={getIndex}/>
           <DeliveryPolicy margin={"mt-20"}/>
           
        
      </Modal>
      
      ,document.body)}
     
      

    </div>
  )
}

export default ProductPicture