//Login Dialog Box
import { Dialog, DialogContent,makeStyles,Box, Typography, TextField, Button } from '@material-ui/core'
import React, { useState } from 'react'
import { callSignup,callLogin } from '../../service/Api.js'

const useStyles=makeStyles({
    component:{
        width:'120vh',
        height:'90vh',
        
    },
    image:{
        backgroundImage:`url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        height:'90vh',
        backgroundRepeat:'no-repeat',
        backgroundColor:'#2874f0',
        width:'40%',
        backgroundPosition:'center 95%',
        padding:'45px 35px',       
        '& > *':{
            color:'#ffffff',
            fontWeight:600

        }
    },
    wrapper:{
        display:'flex',
    },
    login:{
        padding:'25px 35px',
        display:'flex',
        flex:1,
        flexDirection:'column',
        '& > *':{
            marginTop:20
        }
    },
    terms:{
         color: '#878787',
         fontSize: 12,
         fontWeight: 400
    },
    or:{
        color: '#878787',
        fontSize: 13,
        fontWeight: 400,
        textAlign:'center'
    },
    loginbtn:{
        background: '#fb641b',
        boxShadow: '0 1px 2px 0 rgb(0 0 0 / 20%)',
        border: 'none',
        color: '#fff',
        textTransform:'none',
        width: '100%',
        height: 48,
        fontSize: 15
    },
    requestbtn:{
        background: '#ffffff',
        boxShadow: '0 1px 2px 0 rgb(0 0 0 / 20%)',
        border: 'none',
        color: '#2874f0',
        textTransform:'none',
        width: '100%',
        height: 48,
        fontSize: 15
    },
    create:{
        color: '#2874f0',
        fontWeight: 500,
        textAlign:'center',
        marginTop:60,
        cursor:'pointer'
    }
})

const values={
    login:{
        view:'login',
        heading:'Login',
        subHeading:'Get access to your Orders, Wishlist and Recommendations'
    },
    signup:{
        view:'signup',
        heading:'Looks like youre new here!',
        subHeading:'Sign up with your mobile number to get started'
    }
}

//empty object for userSignup state
const signupData={
    firstname:'',
    lastname:'',
    username:'',
    email:'',
    password:'',
    phone:''
}

//empty object for userLogin state
const loginData={
    username:'',
    password:''
}

//main function
function Login({open,setOpen,setAccount}) {
    const [account, setaccount] = useState(values.login)
    const [userSignup,setUserSignup]= useState(signupData)
    const [userLogin, setUserLogin] = useState(loginData)
    const classes=useStyles()

    function handleClose(){
        setOpen(false)
        setaccount(values.login)
    }

    const toggleAccount=()=>{
        setaccount(values.signup)
    }

    //onclick function for signup button
    const signup=async()=>{
      let response= await callSignup(userSignup)
      if(!response) return
      handleClose()
      setAccount(userSignup.username)//for replacing loginbutton with username after signup
    }

    //onclick function for login button
    const login=async()=>{
        let response=await callLogin(userLogin)
        if(!response) return
        handleClose()
        setAccount(userLogin.username)//for replacing loginbutton with username after login
    }

    //setup signup object for api call (object resides in state variable)
    const inputChange=(e)=>{
        setUserSignup({...userSignup,[e.target.name]:e.target.value})
    }

    //setup login object for api call (object resides in state variable)
    //setup login object for api call (object resides in state variable)
    const valueChange=(e)=>{
        setUserLogin({...userLogin,[e.target.name]:e.target.value})
    }



    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent className={classes.component}>
                <Box className={classes.wrapper}>
                    <Box className={classes.image}>
                        <Typography variant='h5'>{account.heading}</Typography>
                        <Typography style={{marginTop:'16px', fontSize:'18px',lineHeight:'150%',color:'#dbdbdb'}}>{account.subHeading}</Typography>
                    </Box>

                   { account.view==='login'?
                     <Box className={classes.login}>
                        <TextField onChange={(e)=>valueChange(e)} name='username' label='Enter Email/Mobile number'/>
                        <TextField onChange={(e)=>valueChange(e)} name='password' label='Enter Password'/>
                        <Typography className={classes.terms}>By continuing, you agree to Flipkart's <a style={{fontSize: 12,fontWeight: 400, color:'#2874f0',textDecoration:'none'}} href="http://localhost:3000/">Terms of Use</a>  and <a style={{fontSize: 12,fontWeight: 400, color:'#2874f0',textDecoration:'none'}} href="http://localhost:3000/">Privacy Policy.</a> </Typography>
                        <Button onClick={()=>login()} variant='contained' className={classes.loginbtn}>Login</Button>
                        <Typography className={classes.or}>OR</Typography>
                        <Button variant='contained' className={classes.requestbtn}>Request OTP</Button>
                        <Typography onClick={()=>toggleAccount()} className={classes.create}>New to Flipkart? Create an account</Typography>

                     </Box>
                     :
                      <Box className={classes.login}>
                       <TextField onChange={(e)=>inputChange(e)} name='firstname' label='Enter First Name'/>
                       <TextField onChange={(e)=>inputChange(e)} name='lastname' label='Enter Last Name'/>
                       <TextField onChange={(e)=>inputChange(e)} name='username' label='Enter User Name'/>
                       <TextField onChange={(e)=>inputChange(e)} name='email' label='Enter Email'/>
                       <TextField onChange={(e)=>inputChange(e)} name='password' label='Enter Password'/>
                       <TextField onChange={(e)=>inputChange(e)} name='phone' label='Enter Mobile number'/>
                       <Button variant='contained' onClick={()=>signup()} className={classes.loginbtn}>Sign Up</Button>
                      </Box>
                    }
                </Box>
                
            </DialogContent>
        </Dialog>
    )
}

export default Login
