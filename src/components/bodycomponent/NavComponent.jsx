import React from 'react'
import NavItem from './NavItem'
import NavLogo from './NavLogo'

const NavComponent = () => {
  return (
    <div className='flex'>
        <NavLogo/>
        <NavItem/>
    </div>
  )
}

export default NavComponent