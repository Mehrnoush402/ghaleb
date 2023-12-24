import React from 'react'
import PrimaryLayout from '../components/PrimaryLayout'
import Body from '../components/origincomponent/Body'
import { useState , createContext } from 'react';
// export const UserContext = createContext({count: 0 , handleCount:()=>{},color:false,handleColor:()=>{}});
export const CountContext = createContext({count: 0 , increaseCount:()=>{} ,decreaseCount:()=>{}});

const Home = () => {
  const [count, setCount] = useState(0)
  // const [color, setColor] = useState(false)
  // const handleColor = ()=>{
  //   setColor(!color)
  // }
  // const handleCount =()=>{
  //     // color?setCount(count-1):setCount(count+1)
  //     setCount(count+1)
  // }

  const increaseCount =()=>{
    setCount(count+1)
  }

  const decreaseCount =()=>{
    setCount(count-1)
  }
  return (
    <>
    <CountContext.Provider value={{count,increaseCount,decreaseCount}}>
    <PrimaryLayout>
       <Body/>
     </PrimaryLayout>
    </CountContext.Provider>
   
      
    </>
  )
}

export default Home