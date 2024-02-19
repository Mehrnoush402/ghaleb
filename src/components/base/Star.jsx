import React, { useContext, useReducer, useState } from 'react'
// import {db} from '../../config/firebase'
// import { getDocs,collection,doc, getDoc, updateDoc } from 'firebase/firestore'
import { DataText } from '../../views/Home';
import { updateReducer } from '../../reducers/updateReducer';
import { updateProduct,getProduct } from '../../servicies/productsServicies';


const Star = ({keyid,fixStar,starClass}) => {
  const [rating, setRating] = useState(0);//for set index of star on click event
  const [hover,setHover]=useState(null)//for set index of star on hover event
  const {list} = useContext(DataText)
  const [starState, setStarState] = useState({})//for get ratestar index of database
  const[state,dispatch]=useReducer(updateReducer,list)

  
  const getDataById=async()=>{//important point:If i get id here as an Entrance in this function i cant use keyid of props of Star(scope discussion)
    try {
       const dataProduct=await getProduct(keyid)
       return dataProduct.data
      
    } catch (error) {
      console.log("error",error);
    }
  }

  const updateRating=async(index)=>{//set rateStar in database at first time
      try {
         setRating(index)
         const Product=await getProduct(keyid)
         const updatedData= await updateProduct({...Product.data,rateStar:index},keyid)
         dispatch({type:"update",data:updatedData.data})
        
      } catch (error) {
        console.log("error: ",error);
      }
  }

  const setStar = async()=>{//set rateStar by getting of database in a state
    const starFill=await getDataById()
    setStarState(starFill?.rateStar)
   }
     
    
  return (
    <div className="star-rating">
      {fixStar && setStar() ? //if starRate set in database index for filling stars is <= it but if it set witn user it is <= rating
         [...Array(5)].map((star, index) => {
          index += 1;
          
            return (
              <button
                type="button"
                key={index}
               
              >
             
                { index <= starState  ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FE8A00" className={`bi bi-star-fill ${starClass}`} viewBox="0 0 16 16">
                                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                               </svg> : 
                                               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FE8A00" className={`bi bi-star ${starClass}`} viewBox="0 0 16 16">
                                                 <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                               </svg>}
        
              </button>
            )}):
      
      [...Array(5)].map((star, index) => {
          index += 1;
          
            return (
              <button
                type="button"
                key={index}
                onClick={() =>updateRating(index)}
                onMouseEnter={()=>setHover(index)}
                onMouseLeave={()=>setHover(null)}
              >
             
                { index <= (rating || hover)  ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FE8A00" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                               </svg> : 
                                               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FE8A00" class="bi bi-star" viewBox="0 0 16 16">
                                                 <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                               </svg>}
        
              </button>
            )
         
        })}
      
       
      
    </div>
  )};


export default Star
 