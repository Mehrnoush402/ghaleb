import axios from "axios";
const SERVERURL='http://localhost:9000'

export const getProducts=()=>{  //for get All productData of database(json-server)
    const url = `${SERVERURL}/list`;
    return axios.get(url);
}

export const getProduct=(productId)=>{  //for get one productData of database(json-server) with id
    const url = `${SERVERURL}/list/${productId}`;
    return axios.get(url);
}

export const createProduct=(newProduct)=>{  //for create one productData in database(json-server)
    const url = `${SERVERURL}/list`;
    return axios.post(url,newProduct);
}

export const updateProduct=(updateData,productId)=>{  //for update one productData of database(json-server) with id
    const url = `${SERVERURL}/list/${productId}`;
    return axios.put(url,updateData);
}

export const deleteProduct=(productId)=>{  //for delete one productData of database(json-server) with id
    const url = `${SERVERURL}/list/${productId}`;
    return axios.delete(url);
}

export const createUser=(newUser)=>{ //for create one user in database(json-server)
    const url=`${SERVERURL}/users`;
    return axios.post(url,newUser)
}

export const getUser=(userId)=>{ //for get one user of database(json-server)
    const url=`${SERVERURL}/users/${userId}`;
    return axios.get(url)
}

export const getUsers=()=>{ //for get all users of database(json-server)
    const url=`${SERVERURL}/users`;
    return axios.get(url)
}

export const updateUser=(updateData,userId)=>{  //for update one user of database(json-server) with id
    const url = `${SERVERURL}/users/${userId}`;
    return axios.put(url,updateData);
}

