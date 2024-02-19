import React from 'react'
import NavItem from './NavItem'
import NavLogo from './NavLogo'

const NavComponent = () => {
  return (
    <div className='flex sm:justify-between'>
        <NavLogo/>
        <NavItem parentNavItemClass={"flex justify-between w-3/4 items-center text-xs sm:hidden"}
         firstNavItemClass={"flex justify-around gap-x-3"}
         secoundNavItemClass={"flex justify-center items-center gap-x-3"}
         hambergureIconClass={"hidden sm:flex"}/>
    </div>
  )
}

export default NavComponent