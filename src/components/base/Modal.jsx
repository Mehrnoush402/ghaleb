import React, { useEffect, useState } from 'react'
import SpanIcon from './SpanIcon';
import { DataText } from '../../views/Home';
import { useContext } from 'react';
import UseFetch from '../../hooks/UseFetch';
import { db } from '../../config/firebase' // for set data list of firestore/firebase
import { getDocs,collection,doc,updateDoc,setDoc,getDoc } from 'firebase/firestore' // for set data list of firestore/firebase
import UseLocalStorage from '../../hooks/UseLocalStorage';
// import { reciveData, update } from '../../services/ProductsService';
// import vitePluginRequire_1705829981414_26253840 from "lodash";
                                                      
// import * as RefreshRuntime from "/@react-refresh";
// import vitePluginRequire from 'vite-plugin-require';
// import _ from 'lodash';

  


const Modal = ({children,isOpen,handleOpen,isCartOnNav,classProps,classModal,classModalBody,keyid,sizeIndex,headerModalClass}) => {
  const{counter,setCounter,sizeList,totalCounterCost,setTotalCounterCost,setColor,addList,setAddList,setIsUpdate}=useContext(DataText)
  const[cacheList,list]=UseFetch()
  // const[data,setData]=useState({
  //   cost:0,
  //   counterProduct:0,
  //   material:"",
  //   name:"",
  //   productId:0,
  //   rateStar:0,
  //   size:""
  // })
   const [fetchedData, setFetchedData] = useState({})

  // useEffect(() => {
  //   const fetchData = async()=>{
  //    try {
  //     const docProduct= doc(db,"webappdata",`${keyid}`)
  //     const dataProduct=await getDoc(docProduct)
      
  //     if (dataProduct.exists()) {
  //       console.log("Document data:", dataProduct.data());
       
  //       setFetchedData((prevData) => ({
  //         ...prevData,
  //         ...dataProduct.data(),
  //       }));
  //     }
  //     console.log("state1 : ",fetchedData);
  //    }
  //     catch (error) {
  //        console.log("error: ",error);
  //    }
  //   }
  //   fetchData()
   
    
  // }, [`${keyid}`])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docProduct = doc(db, "webappdata", `${keyid}`);
        const dataProduct = await getDoc(docProduct);
  
        if (dataProduct.exists()) {
          console.log("Document data:", dataProduct.data());
          setFetchedData(dataProduct.data());

  // setData((prevData) => ({
  //   ...prevData,
  //   cost: dataProduct.data().cost || 0,
  //   counterProduct: dataProduct.data().counterProduct || 0,
  //   material: dataProduct.data().material || "",
  //   name: dataProduct.data().name || "",
  //   productId: dataProduct.data().productId || 0,
  //   rateStar: dataProduct.data().rateStar || 0,
  //   size: dataProduct.data().size || "",
  // }));
  
          // setFetchedData((prevData) => {
          //   return {
          //     ...prevData,
          //     ...dataProduct.data(),
          //   };
          // });
            // setData(prevState=>({
            //       ...prevState,
            //       [dataProduct.data().key]: [dataProduct.data().value]
            //     }))
                // setData((prevData) => ({
                //   ...prevData,
                //   cost: 0,
                //   counterProduct: 0,
                //   material: "",
                //   name: "",
                //   productId: 0,
                //   rateStar: 0,
                //   size: "",
                //   [dataProduct.data().key]: [dataProduct.data().value]
                // }));
         
  
      
        }
        console.log("data1 : ", fetchedData);
      } catch (error) {
        console.log("error: ", error);
      }
    };
    fetchData();
  }, [keyid]);
  
  

//  useEffect(() => {
//   setData(prevState=>({
//     ...prevState,
//     [fetchedData.key]:[fetchedData.value]
//   }))
//   console.log("data2 : ", data);
//  }, [fetchedData])
 

  // const setCartInfo =()=>{
   
  //   // setState(
  //   // { ...state,counterProduct: counter,size:sizeList[sizeIndex]}
  //   // )
  //   // console.log("state2 : ",state);
  // }

  const updateCart=async()=>{
    try {
      const newData= doc(db,"webappdata",`${keyid}`)
      const updateData= await updateDoc(newData,{ ...fetchedData,counterProduct: counter,size:sizeList[sizeIndex]})
      const docProduct = doc(db, "webappdata", `${keyid}`);
        const dataProduct = await getDoc(docProduct);
      setFetchedData(prevState=>({
        ...prevState,
        ...dataProduct.data()
        // counterProduct: counter,
        // size:sizeList[sizeIndex]
        
      }))
      
      
        addList.push(fetchedData)
        setAddList(addList)
        console.log("state2 : ",fetchedData);
        // console.log("addList: ",addList);
    } catch (error) {
      console.log("error: ",error);
    }
  }

    if (!isOpen) return null;
    const handleClose =(e)=>{//for close modal and reset Counter,Size on modal-container
        // console.log("e.target.className:",e.target.className);
        const stringClass=String(e?.target?.className)
        if(stringClass?.includes("modal-container")){
            handleOpen()
            setCounter(0)
            setColor(-1)
            
        }
        
    }
    const handleCost = ()=>{
      setTotalCounterCost(counter*cacheList[keyid-1]?.cost)
      return totalCounterCost
  
    }

    // const addData = async() =>{ //addData to new document in database 
    //   let data={
    //     counterProduct : counter
    //   };
    //   try {
        
    //    addDoc(webAppDataCollectionRef,counterProduct)
    //   } catch (error) {
    //     console.log("error: ", error);
    //   }

    // }
    // const updateData = (id) =>{
    //    update(id,sizeIndex)
    //     const newList=reciveData()
    //     console.log("newlist: ",newList);
     
    // }
    
//     const updateData = async(id) =>{
      
     
//       const newCounter= doc(db,"webappdata",id)
//      await updateDoc(newCounter,{counterProduct:counter,size:sizeList[sizeIndex]})
//     //  cacheList[id-1].counterProduct=counter
//     //  cacheList[id-1].size=sizeList[sizeIndex]
//      setItem(cacheList[id-1].counterProduct,counter)
//     //  localStorage.setItem(`${cacheList[id-1].counterProduct}`, JSON.stringify(counter));
//      setItem(cacheList[id-1].size,sizeList[sizeIndex])
//     //  localStorage.setItem(`${cacheList[id-1].size}`, JSON.stringify(sizeList[sizeIndex]));

//     // const NewCacheList=JSON.parse(localStorage.getItem('cacheList'));
//     //  console.log("newcacheListlocal :",NewCacheList);
     
     
     
//      // Requiring the lodash library 

// // var _ = require("lodash");
 
// // let foundelem = _.findKey(cacheList, {
// //     "productId":id
// // });

// // console.log("found_elem: ",foundelem);


     
//     }

    //  const add=async(id)=>{
    //    try {
    //     const newCounter= doc(db,"webappdata",id)
    //     const get=await getDoc(newCounter)
    //     addList.push(get?.data())
    //     setAddList(addList)
    //     // console.log("addList: ",addList);
    //    } catch (error) {
    //     console.log("error: ",error);
    //    }
    //  }

    const handleBtnClose =()=>{//for close modal and reset Counter,Size on close icon button  
      handleOpen()
      setCounter(0)
      setColor(-1)
    }

    const handleBtnCancel =()=>{//for reset Counter,Size on cancel button
      setCounter(0)
      setColor(-1)
    }

      
    
     
  
    
    
  
  return (
    <div onClick={handleClose} className={`modal-container bg-black bg-opacity-25 inset-0 fixed flex ${classProps}`}>
        <div className={`modal bg-white my-3 mr-3 rounded-xl flex ${classModal}`}>
            <div className={`modal-header flex items-start ${headerModalClass}`}>
                <button onClick={handleBtnClose} className='bg-gray-300 w-8 h-8 flex justify-center items-center rounded-full'>
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
                <SpanIcon content={""} costOrCount={`${handleCost()}$`} spanClass={"text-gray-500"} handleOnClic={""}>
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