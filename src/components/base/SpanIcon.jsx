import React from 'react'

const SpanIcon = ({children,content}) => {
  return (
    <div className='flex gap-x-2 items-center'>
        {children}
        <span className='sm:hidden'>{content}</span>
    </div>
  )
}

export default SpanIcon