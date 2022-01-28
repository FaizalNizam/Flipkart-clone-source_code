import { Box, Button, Card,makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import clsx from 'clsx'
import GroupButton from './GroupButton'

const useStyle=makeStyles({
    component:{
        display:'flex',
        borderRadius:0,
        borderTop:'1px solid #f0f0f0'
    },
    leftComponent:{
        margin:20,
        display:'flex',
        flexDirection:'column'
    },
    rightComponent:{
        margin:20
    },
    smallText:{
        fontSize:14
    },
    greyColorText:{
        color:'#878787'
    },
    price:{
        fontSize:18,
        fontWeight:600
    },
    image:{
        height:110,
        width:110
    },
    removeBtn:{
        marginTop:5,
        fontSize:12
    }
})

function CartItems({item,removeItemFromCart}) {

    const classes=useStyle()
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

    return (
        <Card className={classes.component}>
            <Box className={classes.leftComponent}>
                <img className={classes.image} src={item.url} alt='oops'/>
                <GroupButton/>
            </Box>

            <Box className={classes.rightComponent}>
                <Typography>{item.title.longTitle}</Typography>
                <Typography className={clsx(classes.smallText,classes.greyColorText)} style={{marginTop:10}}>seller: SuperComNet 
                    <span><img src={fassured} alt='oops' style={{width:50,marginLeft:10}}/></span>
                </Typography>
                <Typography style={{margin:'10px 0'}}>
                    <span className={classes.price}>₹{item.price.cost}</span> &nbsp;&nbsp;&nbsp;
                    <span className={classes.greyColorText}><strike>₹{item.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                    <span style={{color:'#388E3C'}}>{item.price.discount} off</span>
                </Typography>
                <Button className={classes.removeBtn} onClick={()=>removeItemFromCart(item.id)}>remove</Button>

            </Box>
        </Card>
    )
}

export default CartItems
