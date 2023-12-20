import React from 'react'
import Star from '../../base/Star'

const ProducsExplain = ({cost,productName,materialProduct}) => {
  return (
    <div className='border rounded border-black flex flex-col w-full'>
      <div className='flex justify-between'>
        <span className='text-[12px] font-semibold w-2/3'>{productName}</span>
        <span className='text-[16px] font-semibold'>{cost}$</span>
      </div>
      <div>
        <span className='text-[10px] font-semibold text-gray-600'>{materialProduct}</span>
      </div>
      <div className='flex'>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
      </div>
    </div>
  )
}

export default ProducsExplain