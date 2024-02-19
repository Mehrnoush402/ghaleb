import React from 'react'
import Star from '../../base/Star'

const ProducsExplain = ({starClass,cost,productName,materialProduct,keyid,explainStyle,fixStar,starFixInAddList}) => {
 
  return (
    <div className={`rounded flex flex-col ${explainStyle}`}>
      <div className='flex justify-between'>
        <span className='text-[12px] sm:text-[8px] md:text-[12px] font-semibold w-2/3'>{productName}</span>
        <span className='text-[16px] sm:text-[8px] md:text-[14px] font-semibold'>{cost}$</span>
      </div>
      <div className='sm:flex'>
        <span className='text-[10px] sm:text-[6px] md:text-[10px] font-semibold text-gray-600'>{materialProduct}</span>
      </div>
      <div className='flex'>
      <Star keyid={keyid} fixStar={fixStar} starFixInAddList={starFixInAddList} starClass={starClass}/>
      </div>
    </div>
      

      
  )
}

export default ProducsExplain