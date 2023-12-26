import React from 'react'

const SpanIcon = ({children,content,costOrCount,spanClass,handleOnClick}) => {
  return (
    <div className='flex gap-x-2 items-center' onClick={handleOnClick}>
        {children}
        <span className={`${spanClass}`}>{costOrCount}</span><span className='sm:hidden'>{content}</span>
    </div>
  )
}

export default SpanIcon