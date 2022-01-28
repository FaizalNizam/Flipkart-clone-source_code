import { Box, Typography,makeStyles } from '@material-ui/core'
import React from 'react'
import { useState,useEffect } from 'react'

const useStyle=makeStyles(theme=>({
    component:{
        //width:'30%',
        background:'#fff',
        marginLeft:15,
        [theme.breakpoints.down('sm')]:{
            marginLeft:0,
            paddingLeft:3
         }
    },
    header:{
        padding:'14px 24px',
        border:'1px solid #f0f0f0',
        [theme.breakpoints.down('sm')]:{
            padding:'14px 0',
         }
    },
    container:{
        padding:'28px 24px',
        '& > *':{
            marginTop:20,
            fontSize:14
        },
        [theme.breakpoints.down('sm')]:{
           padding:'28px 0'
        }
    },
    greyTextColor:{
        color:'#878787'
    },
    price:{
        float:'right'
    },
    totalAmount:{
        fontSize:18,
        fontWeight:600,
        borderTop:'1px dashed #e0e0e0',
        borderBottom:'1px dashed #e0e0e0',
        padding:'10px 0'
    }
}))

function PriceDetail({cartItems}) {

    const classes=useStyle()

    const [price,setPrice]=useState(0)
    const[discount,setDiscount]=useState(0)

    useEffect(() => {
        totalAmount()  
    }, [cartItems])

    const totalAmount=()=>{
        let price=0,discount=0
        cartItems.map(item=>{
            price+=item.price.mrp
            discount+=(item.price.mrp-item.price.cost)
        })
        setPrice(price)
        setDiscount(discount)
    }

    return (
        <Box className={classes.component}>
            <Box className={classes.header}>
                <Typography className={classes.greyTextColor}>PRICE DETAILS</Typography>
            </Box>

            <Box className={classes.container}>
                <Typography>Price({cartItems.length} item) <span className={classes.price}>₹{price}</span></Typography>
                <Typography>Discount <span className={classes.price}>₹{discount}</span></Typography>
                <Typography>Delivery Charge <span style={{color:'green'}} className={classes.price}>Free</span></Typography>
                <Typography className={classes.totalAmount}>Total Amount <span className={classes.price}>₹{price-discount}</span></Typography>
                <Typography style={{color:'green'}}>You will save ₹{discount} </Typography>
            </Box>
        </Box>
        
    )
}

export default PriceDetail
