import React from 'react'
import NavComponent from '../bodycomponent/NavComponent'
import Discount from '../bodycomponent/Discount'
import ProductCart from '../bodycomponent/product/ProductCart'

const Body = () => {
  return (
    <div  className='w-full bg-gray-200 px-4'>
      <NavComponent/>
      <Discount/>
      <ProductCart/>
    </div>
  )
}

export default Body