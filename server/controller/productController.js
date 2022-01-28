import product from '../model/productSchema.js'

//controller function for getting all products from DB
export const getProducts=async(request,response)=>{
    try{
        const products=await product.find({})
        response.json(products)
     

    }catch(error){
        console.log('Error:',error.message)
    }

}

//controller function for getting details of the selected product from DB
export const getProductById=async(request,response)=>{
    try{
        const Product=await product.findOne({'id': request.params.id})
        response.json(Product)

    }catch(error){
        console.log('Error:',error.message)
    }
}