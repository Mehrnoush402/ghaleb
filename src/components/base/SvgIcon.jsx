import React, { useState } from 'react'

const SvgIcon = ({children,position}) => {
  const [color, setColor] = useState(false)
  return (
    <div className={`bg-white rounded-full flex justify-center items-center w-5 h-5 absolute ${position}`}>
       {children}
    </div>
  )
}

export default SvgIcon