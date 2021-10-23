import mongoose from 'mongoose'


const connection= async(username,password)=>{
    const url=`mongodb+srv://${username}:${password}@flipkart-clone.zdvra.mongodb.net/PROJECT0?retryWrites=true&w=majority`

    try{
        await mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology:true})
        console.log('Database connected successfully')
    }catch(error){
        console.log('Error:', error.message)

    }
}

export default connection  