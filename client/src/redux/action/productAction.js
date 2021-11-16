import axios from 'axios'
import * as action from '../constant/productConstant'

const url='http://localhost:8000'


export const getProduct=()=>async(dispatch)=>{
    try{
        const {data}=await axios.get(`${url}/products`)
        dispatch({type:action.GET_PRODUCTS_SUCCESS, payload:data})

    }catch(error){
        dispatch({type:action.GET_PRODUCTS_FAIL, payload:error.response})
    }
}