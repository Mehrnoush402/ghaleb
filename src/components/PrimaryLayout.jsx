import React from 'react'
import Header from './origincomponent/Header'
import Footer from './origincomponent/Footer' 


const PrimaryLayout = ({children}) => {
  return (
    //set h-screen for parent & child to scroll child wid sticky header & footer 
    <div className='flex flex-col items-center h-screen'> 

    <header className='w-full'>
      <Header/>
    </header>
    <main className='w-full flex justify-center h-screen overflow-y-scroll scrollbar-medium'>
      {children} 
    </main>
    <footer className='w-full'>
      <Footer/>
    </footer>
    
    </div>
  )
}

export default PrimaryLayout