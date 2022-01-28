import { Box, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'
import React from 'react'
import {ShoppingCart as Cart, FlashOn as Flash} from '@material-ui/icons';
import { cartAction } from '../../redux/action/cartAction';
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'

const useStyles=makeStyles({
    leftContainer:{
        padding:'40px 0 0 80px'
    },
    image:{
        padding:'15px 20px',
        border:'1px solid #f0f0f0',
        width:'95%'
    },
    button:{
        height:50,
        width:'46%',
        borderRadius:'2px'
    },
    addToCart:{
        backgroundColor:'#ff9f00',
        color:'#fff',
        marginRight:10
    },
    buyNow:{
        backgroundColor:'#fb641b',
        color:'#fff'
    }
    
})

function LeftSide({product}) {
    const classes=useStyles()

    const history=useHistory()
    
    const dispatch = useDispatch()
    const addToCart=()=>{
        dispatch(cartAction(product.id))
        history.push('/cart')
    }

    return (
        <Box className={classes.leftContainer}>
           <img src={product.detailUrl} alt='oops' className={classes.image}/><br/>
           <Button onClick={()=>addToCart()} variant="contained" className={clsx(classes.button, classes.addToCart)}><Cart/>Add to Cart</Button>
           <Button variant="contained" className={clsx(classes.button, classes.buyNow)}><Flash/>Buy Now</Button>
        </Box>
    )
}

export default LeftSide
