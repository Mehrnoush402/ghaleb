import React from 'react'
import Image from '../base/Image'

const Discount = () => {
  return (
    <div className="flex justify-between items-center bg-orange-500 w-full mt-2 bg-[url('../../assets/images/icons.png')]">
        <div className='w-1/5 h-full flex justify-start items-center'>
            <Image src={require("../../assets/images/left-img.png")} width={"140px"} height={"220px"}/></div>
        <div className='flex flex-col w-1/6 justify-center items-center'>
            <span className='text-lg font-bold text-white'>Get 50%  Off on</span>
            <span className='text-lg font-bold text-white'>Selected categories</span>
            <button className='btn rounded-xl bg-white text-rose-500 px-4 text-xs font-bold mt-6'>Shop Now</button>
        </div>
        <div className='w-1/5 h-full flex justify-end items-center'>
            <Image src={require("../../assets/images/right-img.png")} width={"140px"} height={"220px"}/>
        </div>
    </div>
  )
}

export default Discount