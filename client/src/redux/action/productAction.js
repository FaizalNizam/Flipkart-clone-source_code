import axios from 'axios'
import * as action from '../constant/productConstant'

const url='http://localhost:8000'

//action function for UI part: get all products detail
export const getProduct=()=>async(dispatch)=>{
    try{
        const {data}=await axios.get(`${url}/products`)
        dispatch({type:action.GET_PRODUCTS_SUCCESS, payload:data})

    }catch(error){
        dispatch({type:action.GET_PRODUCTS_FAIL, payload:error.response})
    }
}


//action function for UI part: get selected product detail
export const getProductDetail=(id)=>async(dispatch)=>{
    try{
        const {data}=await axios.get(`${url}/product/${id}`)
        dispatch({type:action.GET_PRODUCT_DETAIL_SUCCESS, payload:data})

    }catch(error){
        dispatch({type:action.GET_PRODUCT_DETAIL_FAIL, payload:error.response}) 

    }
}