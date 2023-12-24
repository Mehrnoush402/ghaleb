import React from 'react'
import SpanIcon from '../base/SpanIcon'
import UseModal from '../../hooks/UseModal'
import { createPortal } from 'react-dom'
import Modal from '../base/Modal'

const NavItem = () => {
  const [openCart,handleOpenCart]=UseModal(false)
  
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
            <li onClick={handleOpenCart}>Cart</li>
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
      <Modal isOpen={openCart} handleOpen={handleOpenCart} isCartOnNav={false}  classmodal={"w-1/4 flex-col h-full"} classProps={"bg-black bg-opacity-25 inset-0 fixed flex justify-end items-start"}>
        <p>Modal</p>
      </Modal>
      
      ,document.body)}
    </>
    
  
  )
}

export default NavItem