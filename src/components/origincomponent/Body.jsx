import React from 'react'
import NavComponent from '../bodycomponent/NavComponent'
import Discount from '../bodycomponent/Discount'
import Products from '../bodycomponent/product/Products'

const Body = () => {
  return (
    <div  className='w-full bg-gray-200 px-4'>
      <NavComponent/>
      <Discount/>
      <Products/>
    </div>
  )
}

export default Body