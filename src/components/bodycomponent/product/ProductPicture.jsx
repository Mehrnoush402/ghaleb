import React, { useContext, useState } from 'react'
import SvgIcon from '../../base/SvgIcon'
import Image from '../../base/Image'
import { CountContext } from '../../../views/Home'


const ProductPicture = ({src}) => {
  const [color, setColor] = useState(false)
   const {increaseCount,decreaseCount}=useContext(CountContext)
   const [showSvg, setShowSvg] = useState(false)
   const handleShowSvg =()=>{
    setShowSvg(!showSvg)
    
   }
  // const {color,handleColor,handleCount}=useContext(UserContext)
  // const [count, setCount] = useState(0)
  
  // const handleCount =()=>{
  //      setCount(count+1)
  //      console.log(count);
  // }
  const handleCount = () =>{
    color ? decreaseCount():increaseCount()
  }
  // const setAppear=(color)=>{
  //     console.log("color :",color);
  // }
  return (
    <div className='relative w-full h-2/3' onMouseEnter={handleShowSvg} onMouseLeave={()=>setShowSvg(false)}>
      <Image src={src} width={""} height={""} imgclass={"w-full h-full opacity-full hover:opacity-70"}/>

      <div onClick={()=>{setColor(!color),handleCount()}} className='absolute top-3 right-3'>

        {color ? <SvgIcon position={"top-1 right-1"}>
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="red" class="bi bi-heart" viewBox="0 0 16 16">
          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
        </svg>
      </SvgIcon> : <SvgIcon position={"top-1 right-1"}>
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="gray" class="bi bi-heart" viewBox="0 0 16 16">
          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
        </svg>
      </SvgIcon>}
      </div>
      
    
    {  showSvg?<SvgIcon position={"top-[45%] right-[45%]"} >
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="gray" class="bi bi-cart2" viewBox="0 0 16 16">
      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
    </svg>
  </SvgIcon>:null}
     
      

    </div>
  )
}

export default ProductPicture