import React from 'react'
import { useState } from 'react'
import clsx from 'clsx'
import { useContext } from 'react'
import { DataText } from '../../views/Home'

const Size = ({onEvent}) => {
    
    const{sizeList,color,setColor}=useContext(DataText)
    

    // const setSize =(e)=>{
    //   const buttons=document.getElementsByClassName("buttons");
    //      for (let index = 0; index < buttons.length; index++) {
    //        if (buttons[index].id ===e.currentTarget.id)
    //         {
    //           console.log("id: ",buttons[index].id);
    //           // setDisabled(true)
    //           // buttons[index].disabled=disabled;
    //           setColor(!color)
    //           console.log("disabled: ",color);
              
    //           break;
              
    //        }
    //        else{
            
    //         setColor(color)
             
              
             
              
    //        }
          
    //      }
    // }
     
  const handleIndex = (index)=>{
    setColor(index)
    return index
  }
 

    
  return (
    <div className=" parent flex justify-between w-[60%] gap-x-1 mt-5">
      {[...Array(5)].map((btn, index) => {
        return (
          <div key={index} className="w-1/5 flex justify-between items-center"onClick={()=>onEvent(handleIndex(index))}>
          
           {color==index?<button className={clsx(` border border-orange-500 rounded w-full text-xs font-semibold py-2 bg-orange-500 text-white`)}>{sizeList[index]}</button>
            :<button className={clsx(` border border-orange-500 rounded text-orange-500 w-full text-xs font-semibold py-2`)}>{sizeList[index]}</button>}
          
          </div>
        )
      })}
       
    </div>
  )
}

export default Size