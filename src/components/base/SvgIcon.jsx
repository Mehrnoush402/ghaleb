import React from 'react'

const SvgIcon = ({children,position,handleOpenCart}) => {
  return (
    <div className={`bg-white rounded-full flex justify-center items-center w-5 h-5 ${position}`} onClick={handleOpenCart} >
       {children}
      
    </div>
    
  )
}

export default SvgIcon