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