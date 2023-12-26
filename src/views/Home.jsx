import React from 'react'
import PrimaryLayout from '../components/PrimaryLayout'
import Body from '../components/origincomponent/Body'
import { useState , createContext } from 'react';
// export const UserContext = createContext({count: 0 , handleCount:()=>{},color:false,handleColor:()=>{}});
export const  DataText = createContext({count: 0 , increaseCount:()=>{} ,decreaseCount:()=>{},counter:0, increaseCounter:()=>{} ,decreaseCounter:()=>{}});

const Home = () => {
  const [count, setCount] = useState(0)
  const [counter, setCounter] = useState(0)
  // const [color, setColor] = useState(false)
  // const handleColor = ()=>{
  //   setColor(!color)
  // }
  // const handleCount =()=>{
  //     // color?setCount(count-1):setCount(count+1)
  //     setCount(count+1)
  // }

  const increaseCounter =()=>{
    setCounter(counter+1)

   }
   const decreaseCounter =()=>{
    setCounter(counter-1)

   }

  const increaseCount =()=>{
    setCount(count+1)
  }

  const decreaseCount =()=>{
    setCount(count-1)
  }
  return (
    <>
    <DataText.Provider value={{count,increaseCount,decreaseCount,counter,increaseCounter,decreaseCounter}}>
       <PrimaryLayout>
          <Body/>
       </PrimaryLayout>
    </DataText.Provider>
   
      
    </>
  )
}

export default Home