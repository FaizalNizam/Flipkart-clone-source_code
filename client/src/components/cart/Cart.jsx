import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Box,makeStyles, Typography,Button, Grid} from '@material-ui/core'
import CartItems from './CartItems'
import { removeFromCart } from '../../redux/action/cartAction'
import Emptycart from './Emptycart'
import PriceDetail from './PriceDetail'


const useStyles=makeStyles(theme=>({
    component:{
        marginTop:55,
        padding:'30px 135px',
        display:'flex',
        [theme.breakpoints.down('sm')]:{
           padding:'10px 0' 
        }
    },
    leftComponent:{
        //width:'67%',
        [theme.breakpoints.down('sm')]:{
            marginBottom:'15px'
         }
    },
    header:{
        padding:'15px 24px',
        background:'#fff'
    },
    placeorder:{
        background:'#fb641b',
        color:'#fff',
        borderRadius:2,
        width:250,
        height:50,
        display:'flex',
        marginLeft:'auto'
    },
    bottom:{
        padding:'16px 22px',
        background:'#fff',
        borderTop:'1px solid #f0f0f0',
        boxShadow:'0 -2px 10px 0 rgb(0 0 0 /10%)'
    }
}))

function Cart() {

    const classes=useStyles()

    const {cartItems} = useSelector(state => state.cart)

    const dispatch=useDispatch()
    const removeItemFromCart=(id)=>{
        dispatch(removeFromCart(id))
    }


    return (
        <>
           {
               cartItems.length?
                    <Grid container className={classes.component}>

                        <Grid item lg={8} md={8} sm={12} xs={12} className={classes.leftComponent}>

                            <Box className={classes.header}>
                                <Typography style={{fontWeight:600}}>My cart ({cartItems.length})</Typography>
                            </Box>

                            {
                                cartItems.map(item=>(
                                    <CartItems item={item} removeItemFromCart={removeItemFromCart}/>
                                ))
                            }

                            <Box className={classes.bottom}>
                                <Button variant="contained" className={classes.placeorder}>Place Order</Button>
                            </Box>
                        
                        </Grid>


                        <Grid item lg={4} md={4} sm={12} xs={12}>
                            <PriceDetail cartItems={cartItems}/>
                        </Grid>
                        
                    </Grid>
                    
                :<Emptycart/>
           } 
        </>
    )
}

export default Cart
