import React from 'react'
import SpanIcon from './SpanIcon';

const Modal = ({children,isOpen,handleOpen,isCartOnNav,classProps,classModal,classModalBody,sendCount}) => {
    if (!isOpen) return null;
    const handleClose =(e)=>{
        console.log("e.target.className:",e.target.className);
        if(e.target.className.includes("modal-container")){
            handleOpen()
        }
        
    }
  return (
    <div onClick={(e)=>handleClose(e)} className={`modal-container bg-black bg-opacity-25 inset-0 fixed flex ${classProps}`}>
        <div className={`modal bg-white my-3 mr-3 rounded-xl flex flex-wrap flex-row-reverse justify-between ${classModal}`}>
            <div className='modal-header flex items-start bg-red-400'>
                <button onClick={handleOpen} className='bg-gray-300 w-8 h-8 flex justify-center items-center rounded-full'>
                  <svg xmlns="http://www.w3.org/2000/svg"  width="25" height="25" fill="currentColor"  class="bi bi-x" viewBox="0 0 16 16">
                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                  </svg>
                </button>
            </div>
            <div className={`modal-body ${classModalBody}`}>
                {children}
            </div>
            {isCartOnNav && <div className='modal-footer flex justify-between items-center px-2 bg-blue-500 w-full'>
                <div className='flex justify-between items-center gap-x-2'>
                   <button className='rounded-full text-orange-500 text-xs px-4 py-1 font-semibold border border-orange-500' onClick={()=>{}}>Add to cart</button>
                   <button className='text-gray-500 text-xs font-semibold'>cancel</button>
                </div>
                <SpanIcon content={""} costOrCount={`${85}$`} spanClass={"text-gray-500"} handleOnClic={""}>
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-cart2" viewBox="0 0 16 16">
                         <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                       </svg>
                </SpanIcon>
               
               </div>}
            

        </div>
        

    </div>
  )
}

export default Modal