import React, { useEffect, useMemo, useState } from 'react'
import { db } from '../config/firebase' // for set data list of firestore/firebase
import { getDocs,collection } from 'firebase/firestore' // for set data list of firestore/firebase
  
const UseFetch =()=>{
    const[list,setList]=useState([]) // for set data list of firestore/firebase
    const [id, setId] = useState(0)
    const webAppDataCollectionRef =collection(db,"webappdata") // for set data list of firestore/firebase
    useEffect(() => {
      const fetchData = async()=>{
       try {
        const respons=await getDocs(webAppDataCollectionRef)
        const filteredData=respons.docs.map((doc)=>({
            ...doc.data(),
            id:doc.id
           
            
            
        }))
        setList(filteredData)
        
       } catch (error) {
           console.log("error: ",error);
       }
      }
      fetchData()
     
      
    }, [])
    const cacheList=useMemo(() => list, [list])//cache list in db
    return[cacheList]
}
export default UseFetch;