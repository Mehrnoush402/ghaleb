import React from 'react'
import NavComponent from '../bodycomponent/NavComponent'
import Discount from '../bodycomponent/Discount'

const Body = () => {
  return (
    <div  className='w-full bg-gray-200 px-4'>
      <NavComponent/>
      <Discount/>
    </div>
  )
}

export default Body