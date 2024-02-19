import React, { useContext, useEffect} from 'react'
import SpanIcon from '../base/SpanIcon'
import { DataText } from '../../views/Home'


const Footer = () => {
  const {count,addList,setAddList}=useContext(DataText)
  
  
  useEffect(() => {
    const addListData=localStorage.getItem("addList")
    setAddList(JSON.parse(addListData))
   }, [addList])


 const calculateCosts =()=>{

  let total=0;
  addList.map((item,index)=>{
    total += item?.cost*item?.counterProduct
    

  })
  return total
  
}
 
 
  return (
    <div  className='w-full bg-orange-500 bottom-0 flex justify-between text-white items-center p-2'>

      <div className='flex justify-between w-1/5 sm:w-1/12 sm:gap-x-2'>
      <SpanIcon costOrCount={`${addList.length}`} parentClass={"gap-x-2 sm:gap-x-1"} content={"Items added to Cart"} spanClass={""} handleOnClic={""}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
        </svg>
      </SpanIcon>
      <SpanIcon costOrCount={`${count}`} parentClass={"gap-x-2 sm:gap-x-1"} content={"Wish List"} spanClass={""} handleOnClic={""}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
        </svg>
      </SpanIcon>
      </div>

      <SpanIcon costOrCount={`${calculateCosts()}$`}  parentClass={"gap-x-2"} content={""} spanClass={""} handleOnClic={""}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
          <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
        </svg>
      </SpanIcon>
    </div>
  )
}

export default Footer