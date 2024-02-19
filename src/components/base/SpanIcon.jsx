import React from 'react'

const SpanIcon = ({children,content,costOrCount,parentClass,spanClass,handleOnClick}) => {
  return (
    <div className={`flex items-center ${parentClass}`} onClick={handleOnClick}>
        {children}
        <span className={`${spanClass}`}>{costOrCount}</span><span className='sm:hidden'>{content}</span>
    </div>
  )
}

export default SpanIcon