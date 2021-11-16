import axios from 'axios'

const url='http://localhost:8000'

//Api call for signup
export const callSignup=async(user)=>{
    try{
        return await axios.post(`${url}/signup`,user)

    }catch(error){
        console.log('error while calling signup API',error.message)
    }
    
}

//Api call for login
export const callLogin=async(user)=>{
    try{
        return await axios.post(`${url}/login`,user)

    }catch(error){
        console.log('error while calling API',error.message)
    }
}