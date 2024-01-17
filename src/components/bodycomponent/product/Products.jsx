import React, { useEffect, useState } from 'react'
import ProductCart from './ProductCart'
import { useId } from 'react'
import UseFetch from '../../../hooks/UseFetch'

// import { db } from '../../../config/firebase' // for set data list of firestore/firebase
// import { getDocs,collection } from 'firebase/firestore' // for set data list of firestore/firebase

// import { storage } from '../../../config/firebase' // for set img list of sorage
// import {ref,listAll,getDownloadURL} from "firebase/storage" // for set img list of sorage


const Products = () => {
  const[cacheList]=UseFetch(null)
 
  // const[list,setList]=useState([]) // for set data list of firestore/firebase
  // const webAppDataCollectionRef =collection(db,"webappdata") // for set data list of firestore/firebase

  // const imagesListRef = ref(storage,"Images/") // for set img list of sorage
  // const [imageList, setImageList] = useState([]) // for set img list of sorage

  // useEffect(() => { // for set data list of firestore/firebase
  //   const fetchData = async ()=>{
  //     try {
  //       const response = await getDocs(webAppDataCollectionRef)
  //       const filteredresponse=response.docs.map((doc)=>
  //       ({
  //         ...doc.data(),
  //         id: doc.id
  //         // id:doc.id+Math.floor(Math.random()*1000).toString(),
  //       }))
  //     // const res=await response.JSON()
  //     setList(filteredresponse)
  //     } catch (error) {
  //       console.log("error:",error);
  //     }
  //   }
  //   fetchData()
   
  // }, [])

  // useEffect(() => { // for set img list of sorage
  //   listAll(imagesListRef).then((response)=>{response.items.forEach((item)=>{
  //     getDownloadURL(item).then((url)=>{
  //       setImageList((prev)=>([...prev,url]))
  //     })
  //   })})
  
   
  // }, [])
  
  
  return (
    <div className='w-full flex flex-wrap gap-y-4 mt-6 justify-between'>

      {cacheList?.map((item)=>{ 
       
        return(
          <ProductCart pictureStyle={"w-full h-2/3"} explainStyle={"w-full mt-2"} key={item.id} productCartId={item.id} src={item.src} cost={item.cost} classProduc={"flex flex-col items-center w-[23%]"} productName={item.name} materialProduct={item.material}/>
      )})}

       {/* //iterate two list for return one component
        {list?.map((item,index)=>{
        const imgUrl=imageList[index]
        return(
          <ProductCart  key={index} src={imgUrl} cost={item.cost} classProduc={"w-[23%]"} productName={item.name} materialProduct={item.material}/>
      )})} */}
        

    </div>
  )
}

export default Products