import React, { useState } from 'react'
import NavComponent from '../bodycomponent/NavComponent'
import Discount from '../bodycomponent/Discount'
import Products from '../bodycomponent/product/Products'
import { createContext } from 'react'
// export const DataText=createContext({counter:0, increaseCounter:()=>{} ,decreaseCounter:()=>{}})


const Body = () => {
  // const [counter, setCounter] = useState(0)
  // const increaseCounter =()=>{
  //   setCounter(counter+1)

  //  }
  //  const decreaseCounter =()=>{
  //   setCounter(counter-1)

  //  }
  return (
    <div  className='w-full bg-gray-200 px-4'>
     
        <NavComponent/>
        <Discount/>
        <Products/>
     
    </div>
  )
}

export default Body