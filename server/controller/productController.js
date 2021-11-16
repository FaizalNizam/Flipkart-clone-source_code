import product from '../model/productSchema.js'

export const getProducts=async(request,response)=>{
    try{
        const products=await product.find({})
        response.json(products)
     

    }catch(error){
        console.log('Error:',error.message)
    }

}