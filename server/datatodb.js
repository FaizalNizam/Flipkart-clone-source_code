import {products} from './products/product.js'
import product from './model/productSchema.js'


const data= async()=>{
    try{
        await product.deleteMany({})
        await product.insertMany(products)
        console.log('Data successfully imported to database')

    }catch(error){
        console.log('Error:', error.message)

    }

}

export default data