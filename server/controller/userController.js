import userValidated from "../model/userSchema.js"

//for signup call
export const userSignup=async(request,response)=>{
    
    try{
        const exist= await userValidated.findOne({username:request.body.username})
        if(exist){
           return response.status(401).json('user already exist')
        }

        const user=request.body
        const newUser= new userValidated(user)
        await newUser.save()
        response.status(200).json('user successfully registered on database')

    }catch(error){
        console.log('Error:',error.message) 
    }
}

//for login call
export const userLogin=async(request,response)=>{
    try{
        let user=await userValidated.findOne({username:request.body.username,password:request.body.password})
        if(user){
            return response.status(200).json(`${request.body.username} login successfull` )
        }
        else{
            return response.status(401).json('invalid login')
        }

    }catch(error){
        console.log('Error:',error.message)  
    }
}