import React from 'react'
import { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { getProductDetail } from '../../redux/action/productAction'
import {Box, Grid, Table, TableBody, TableCell, TableRow, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import {LocalOffer as Badge} from '@material-ui/icons';
import clsx from 'clsx'

//components
import LeftSide from './LeftSide'

//material UI
const useStyles=makeStyles(theme=>({
    component:{
        marginTop:25,
        backgroundColor:'#f2f2f2'
    },
    container:{
        //margin:'0 80px',
        backgroundColor:'#fff',
        display:'flex',
        [theme.breakpoints.down('md')]:{
            margin:0
        }
    },
    rightcontainer:{
        marginTop:50,
        '& < *':{
            marginTop:10
        }
    },
    smallText:{
        fontSize:14,
        verticalAlign:'baseline',
        '& > *':{
            fontSize:14,
            marginTop:10
        }
    },
    greyTextColor:{
        color:'#878787'
    },
    price:{
        fontSize:28
    },
    badge:{
        fontSize:14,
        marginRight:10,
        color:'#00CC00'
    }

}))


function DetailView({match}) {

    const classes=useStyles()
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const sellerURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date=new Date(new Date().getTime()+(5*24*60*60*1000))
   
    //useSelector hook for retrieving getProduct data from redux store
    const {product} = useSelector(state => state.getProduct)

    //useDispatch hook for calling selected product API from server using axios in productAction
    const dispatch = useDispatch()
    useEffect(() => {
          dispatch(getProductDetail(match.params.id))
  
    },[dispatch, match.params.id])


    return (
        <Box className={classes.component}>
            {product && Object.keys(product).length &&
              <Grid container lg={12} md={12} sm={12} xs={12} className={classes.container}>
                <Grid item lg={4} md={4} sm={8} xs={10} style={{minWidth:'40%'}}>
                    <LeftSide product={product}/>
                </Grid>

                <Grid item lg={6} md={6} sm={8} xs={12} className={classes.rightcontainer}>
                    <Typography>{product.title.longTitle}</Typography>
                    <Typography className={clsx(classes.smallText, classes.greyTextColor)}>
                        8 ratings & 1 review 
                        <span><img src={fassured} alt='oops' style={{width:77, marginLeft:20}} /></span>
                    </Typography>
                    <Typography>
                        <span className={classes.price}>₹{product.price.cost}</span> &nbsp;&nbsp;&nbsp;
                        <span className={classes.greyTextColor}><strike>₹{product.price.mrp}</strike></span> &nbsp;&nbsp;&nbsp;
                        <span style={{color:'#388E3C'}}>{product.price.discount} off</span>
                    </Typography>
                    <Typography style={{marginTop:20,fontWeight:600}}>Available offers</Typography>
                    <Box className={classes.smallText}>
                      <Typography><Badge className={classes.badge}/>Bank OfferFlat ₹100 off on first Flipkart Pay Later order of ₹500 and above T&C</Typography>
                      <Typography><Badge className={classes.badge}/>Bank Offer10% off on Federal Bank Debit/Credit Cards, up to ₹1500. On orders of ₹5000 and above</Typography>
                      <Typography><Badge className={classes.badge}/>Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card T&C</Typography>
                      <Typography><Badge className={classes.badge}/>Special PriceGet extra 10% off (price inclusive of discount) T&C</Typography>
                    </Box>

                    <Table>
                        <TableBody>
                            <TableRow className={classes.smallText}>
                                <TableCell className={classes.greyTextColor}>Expected delivery</TableCell>
                                <TableCell style={{fontWeight:600}}>{date.toDateString()}</TableCell>
                            </TableRow>

                            <TableRow className={classes.smallText}>
                                <TableCell className={classes.greyTextColor}>Warranty</TableCell>
                                <TableCell>No Warranty</TableCell>
                            </TableRow>

                            <TableRow className={classes.smallText}>
                                <TableCell className={classes.greyTextColor}>Seller</TableCell>
                                <TableCell className={classes.smallText}>
                                    <Typography style={{color:'#2874f0'}}>Supercomet</Typography>
                                    <Typography>GST Invoice Available</Typography>
                                    <Typography>14 Days Return Policy</Typography>
                                    <Typography>View more Sellers starting from ₹300 </Typography>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell colSpan={2}>
                                    <img style={{width:500}} src={sellerURL} alt='oops'/>
                                </TableCell>
                            </TableRow>

                            <TableRow className={classes.smallText}>
                                <TableCell className={classes.greyTextColor}>Description</TableCell>
                                <TableCell>{product.description}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Grid>
                
              </Grid>
            }
                
        </Box>
    )
}

export default DetailView
