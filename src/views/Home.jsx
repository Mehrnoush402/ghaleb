import React from 'react'
import PrimaryLayout from '../components/PrimaryLayout'
import Body from '../components/origincomponent/Body'
import { useState , createContext } from 'react';
import UseFetch from '../hooks/UseFetch';
// export const UserContext = createContext({count: 0 , handleCount:()=>{},color:false,handleColor:()=>{}});
export const  DataText = createContext({count: 0 , increaseCount:()=>{} ,decreaseCount:()=>{},counter:0,setCounter:()=>{}, increaseCounter:()=>{} ,decreaseCounter:()=>{},sizeList:[],setSizeList:()=>{},totalCounterCost:0,setTotalCounterCost:()=>{},color:0,setColor:()=>{},addList:[],setAddList:()=>{}});

const Home = () => {
  const [count, setCount] = useState(0)
  const [counter, setCounter] = useState(0)
  const [sizeList,setSizeList]=useState(['S','M','L','XL','XXL'])//for set content size in db
  const [color, setColor] = useState()//for set index of Size component for set index size and set to db,onclick to cancel button modal
  const [totalCounterCost, setTotalCounterCost] = useState(0)
  const [addList,setAddList]=useState([])
  const[cacheList]=UseFetch()
  
  

  
  
 
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
    if (counter>0) {
      setCounter(counter-1)
    }

   }

  const increaseCount =()=>{
    setCount(count+1)
  }

  const decreaseCount =()=>{
    setCount(count-1)
  }
  return (
    <>
    <DataText.Provider value={{count,increaseCount,decreaseCount,counter,setCounter,increaseCounter,decreaseCounter,sizeList,setSizeList,totalCounterCost,setTotalCounterCost,color,setColor,addList,setAddList}}>
       <PrimaryLayout>
          <Body/>
       </PrimaryLayout>
    </DataText.Provider>
   
      
    </>
  )
}

export default Home