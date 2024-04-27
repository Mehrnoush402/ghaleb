import React, { useEffect, useReducer, useState } from 'react'
import SpanIcon from './SpanIcon';
import { DataText } from '../../views/Home';
import { useContext } from 'react';
import { updateProduct, updateUser } from '../../servicies/productsServicies';
import { updateReducer } from '../../reducers/updateReducer';
import { loginData } from '../../App';

  


const Modal = ({children,isOpen,handleOpen,isCartOnNav,classProps,classModal,classModalBody,keyid,sizeIndex,headerModalClass,productData}) => {
  const{addListId,setAddListId,inputValue,setInputValue,sizeList,totalCounterCost,setTotalCounterCost,setColor,color,addList,setAddList,list}=useContext(DataText)
  const[state,dispatch]=useReducer(updateReducer,list)
  const [productInfo, setProductInfo] = useState(productData)//when modal becomes open set productData of a data that comes of props on state
  const{loginUser,setLoginUser}=useContext(loginData)

  const handleBtnClose =()=>{//for close modal and reset Counter,Size on close icon button  
    handleOpen() //for change true to false & upside down for opennig & closing modal
    setInputValue(0) //when modal closed input value becomes reset
    setColor(-1) //when modal closed size component becomes reset(No size has been selected)
  }

 useEffect(() => {//when productData will be updated set it into state again
    setProductInfo(productData)
   }, [productData])

 
  const updateCart=async()=>{//for every update you dont need to get it of batabase at first time because you have id &  can access to it with id
    if (loginUser?.id) {
      if (inputValue==0 || color == -1 ) {
        alert("please choose size & counter for this product")
      }
      else{
        const updatedData= await updateProduct({...productInfo,counterProduct: inputValue,size:sizeList[sizeIndex]},keyid)
        dispatch({type:"update",data:updatedData.data})
        loginUser?.choiceList.push(updatedData.data)
        // loginUser?.isAddedList.push({"ProductId":keyid,"isAdded":true})
        setLoginUser(loginUser)
        await updateUser(loginUser,loginUser?.id)
       
        // addList.push(updatedData.data)
        // setAddList(addList)
        // localStorage.setItem("basketList",JSON.stringify(loginUser))
        handleBtnClose()
         
      }   
    }else{
      alert("Please sign in")
    }
    
  }
 
    if (!isOpen) return null; //if isOpen be false , modal don't open
    const handleClose =(e)=>{//for close modal and reset Counter,Size on modal-container
        const stringClass=String(e?.target?.className)
        if(stringClass?.includes("modal-container")){ //when click on dark section with opacity low the modal be closed
            handleOpen()
            setInputValue(0)
            setColor(-1)
            
        }
        
    }
    const handleCost = ()=>{//for set cost on footer of modal
      setTotalCounterCost(parseInt(inputValue*productData?.cost))
      return totalCounterCost
  
    }

    const handleBtnCancel =()=>{//for reset Counter,Size on cancel button
      setInputValue(0)
      setColor(-1)
    }
   
  
  return (
    <div onClick={handleClose} className={`modal-container bg-black bg-opacity-25 inset-0 fixed flex ${classProps}`}>
        <div className={`modal bg-white my-3 mr-3 rounded-xl flex ${classModal}`}>
            <div className={`modal-header flex items-start ${headerModalClass}`}>
                <button onClick={handleBtnClose} className='bg-gray-300 w-8 h-8 sm:w-4 sm:h-4 sm:mb-4 flex justify-center items-center rounded-full'>
                  <svg xmlns="http://www.w3.org/2000/svg"  width="25" height="25" fill="currentColor"  class="bi bi-x" viewBox="0 0 16 16">
                     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                  </svg>
                </button>
            </div>
            <div className={`modal-body ${classModalBody}`}>
                {children}
            </div>
            {isCartOnNav && <div className='modal-footer flex justify-between items-center px-2 w-full'>
                <div className='flex justify-between items-center gap-x-2'>
                   <button className='rounded-full text-orange-500 text-xs px-4 py-1 font-semibold border border-orange-500' onClick={()=>updateCart()}>Add to cart</button>
                   <button className='text-gray-500 text-xs font-semibold' onClick={handleBtnCancel}>cancel</button>
                </div>
                <SpanIcon content={""} costOrCount={`${handleCost()}$`} parentClass={"gap-x-2"} spanClass={"text-gray-500"} handleOnClic={""}>
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" class="bi bi-cart2" viewBox="0 0 16 16">
                         <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                       </svg>
                </SpanIcon>
               
               </div>}
            

        </div>
        

    </div>
  )
}

export default Modal