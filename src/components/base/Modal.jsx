import React from 'react'

const Modal = ({children,isOpen,handleOpen,isCartOnNav,classProps,classmodal}) => {
    if (!isOpen) return null;
    const handleClose =(e)=>{
        if(e.target.className.includes("modal-container")||e.target.className.includes("button-close")){
            handleOpen()
        }
        
    }
  return (
    <div onClick={(e)=>handleClose(e)} className={`modal-container ${classProps}`}>
        <div className={`modal bg-white my-3 mr-3 rounded-xl flex-col ${classmodal}`}>
            <div className='modal-header flex p-4 justify-end items-center'>
                <button onClick={(e)=>handleClose(e)} className='icon-close bg-gray-300 w-8 h-8 flex justify-center items-center rounded-full'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                  </svg>
                </button>
            </div>
            <div className='modal-body flex justify-center items-center'>
                {children}
            </div>
            <div className='modal-footer flex justify-center items-center'>
                <button className='button-close bg-green-700 text-white p-2 text-sm rounded border flex justify-center items-center' onClick={(e)=>handleClose(e)}>send</button>
            </div>
        </div>
        

    </div>
  )
}

export default Modal