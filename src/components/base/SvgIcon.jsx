import React from 'react'

const SvgIcon = ({children,position}) => {
  return (
    <div className={`bg-white rounded-full w-5 h-5 flex justify-center items-center absolute ${position}`}>
       {children}
    </div>
  )
}

export default SvgIcon