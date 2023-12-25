import React from 'react'

const Modal = ({children,isOpen,handleOpen,isCartOnNav,classProps,classModal,classModalBody}) => {
    if (!isOpen) return null;
    const handleClose =(e)=>{
        console.log("e.target.className:",e.target.className);
        if(e.target.className.includes("modal-container")){
            handleOpen()
        }
        
    }
  return (
    <div onClick={(e)=>handleClose(e)} className={`modal-container bg-black bg-opacity-25 inset-0 fixed flex ${classProps}`}>
        <div className={`modal bg-white my-3 mr-3 rounded-xl flex-col ${classModal}`}>
            <div className='modal-header flex p-4 justify-end items-center'>
                <button onClick={handleOpen} className='bg-gray-300 w-8 h-8 flex justify-center items-center rounded-full'>
                  <svg xmlns="http://www.w3.org/2000/svg"  width="25" height="25" fill="currentColor"  class="bi bi-x" viewBox="0 0 16 16">
                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                  </svg>
                </button>
            </div>
            <div className={`modal-body flex justify-center items-center ${classModalBody}`}>
                {children}
            </div>
            <div className='modal-footer flex justify-center items-center'>
                <button className='bg-green-700 text-white p-2 text-sm rounded border flex justify-center items-center' onClick={handleOpen}>send</button>
            </div>
        </div>
        

    </div>
  )
}

export default Modal