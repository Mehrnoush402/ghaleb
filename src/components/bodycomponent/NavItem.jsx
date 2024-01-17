import React, { useContext, useState } from 'react'
import SpanIcon from '../base/SpanIcon'
import UseModal from '../../hooks/UseModal'
import { createPortal } from 'react-dom'
import Modal from '../base/Modal'
import ProductCart from './product/ProductCart'
import UseFetch from '../../hooks/UseFetch'
import { DataText } from '../../views/Home'
import DeliverInformation from './DeliverInformation'
import OrderSummery from './OrderSummery'
import DeliveryPolicy from './DeliveryPolicy'

const NavItem = () => {
  const [openCart,handleOpenCart]=UseModal(false)
  const{addList,counter}=useContext(DataText)
  // const[totalItemsCounter,setTotalItemsCounter]=useState(0)

  const totals =()=>{
    let total=0;
    addList?.map((item,index)=>{
      total += item?.counterProduct;
    })
    return total;
  } 
   const checkCart=()=>{
    if (!addList.length) {
      alert("Your cart is empty! Please add some items to it");
    }
    else{
      handleOpenCart()
    }
   }
  
  return (
    <>
      <div className='flex justify-between w-3/4 items-center text-xs sm:hidden'>
        <nav className='flex justify-around text-black list-none gap-x-3'>
            <li>Categories</li>
            <li>Deals</li>
            <li>What's New</li>
            <li>Delivery</li>
        </nav>
        <nav className='flex justify-center items-center text-black list-none gap-x-3'>
            <li>
              <SpanIcon content={"Account"}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"/>
              </svg>
              </SpanIcon>
              </li>
            <li onClick={()=>checkCart()}>Cart</li>
        </nav>
    </div>
    <div className='hidden sm:flex'> 
      <button className=' bg-gray-300 rounded-md'> {/* //this button will have modal */}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
      </button>
    </div>
    {createPortal(
      <Modal isOpen={openCart} handleOpen={handleOpenCart} isCartOnNav={false} classModal={"w-1/2 p-4"} classProps={"justify-center items-center"} classModalBody={"w-full"}>
        <div className='w-full flex justify-between gap-x-3 p-3'>
          <div className='leftDiv flex flex-col items-center w-2/3 gap-y-3'>
            <div className='topDiv flex flex-col p-3 w-full border border-gray-300 rounded'>
              <p className="text-lg font-semibold">Cart Details</p>
              {addList?.map((item,index)=>{
                // {setTotalItemsCounter((prev) => prev + item?.counterProduct)} 
               return (<ProductCart isOpen={true} pictureWidth={"w-[33%] h-[65%]"} explainWidth={"w-[67%] h-full mt-10"} key={index} src={item?.src} cost={item?.cost*item?.counterProduct} productName={item?.name} materialProduct={item?.material} classProduc={"flex relative justify-between items-center w-[70%] gap-x-6"}>
                              <div className='rounded-full bg-gray-300 text-orange-500 absolute w-8 h-8 flex justify-center items-center top-[85px] left-[75px]'>{item?.counterProduct}</div>
                       </ProductCart>
                       
                       
                         
               )
              })}
              
            </div>
            <div className='bottomDiv h-1/3 w-full border border-gray-300 rounded'>
              <DeliverInformation/>
            </div>
          </div>
          <div className='rightDiv flex flex-col justify-between w-1/3 border border-gray-300 rounded'>
              <OrderSummery totals={totals()}/>
              <div className='bg-gray-100 p-5'>
                <DeliveryPolicy/>
              </div>
          </div>
        </div>
      </Modal>
      
      ,document.body)}
    </>
    
  
  )
}

export default NavItem