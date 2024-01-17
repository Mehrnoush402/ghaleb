import React from 'react'
import Star from '../../base/Star'

const ProducsExplain = ({cost,productName,materialProduct,keyid,explainWidth,starFix}) => {
 
//   const showId=(id,state)=>{
//     if(state===false && id>1){
      
//       // console.log("state :",state);
//       // console.log("id :",id);
//       id--
//       // for (let index = 1; index <= id; id--) {
//           //  state=false;
//            console.log("id,state",id,state);
//            showId(id,state)
//            return state
//       // }


//     }
//  }

  return (
    <div className={`rounded flex flex-col ${explainWidth}`}>
      <div className='flex justify-between'>
        <span className='text-[12px] font-semibold w-2/3'>{productName}</span>
        <span className='text-[16px] font-semibold'>{cost}$</span>
      </div>
      <div>
        <span className='text-[10px] font-semibold text-gray-600'>{materialProduct}</span>
      </div>
      <div className='flex'>
      <Star keyid={keyid} starFix={starFix}/>
      </div>
    </div>
      

      
  )
}

export default ProducsExplain