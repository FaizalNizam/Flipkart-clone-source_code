import React,{useEffect} from 'react'
import {makeStyles,Box} from '@material-ui/core'
import { adURL} from '../../constants/constants';
import {useSelector,useDispatch} from 'react-redux'
import { getProduct } from '../../redux/action/productAction';

//components
import Banner from './Banner'
import NavBar from './NavBar'
import Slide from './Slide'
import MidSection from './MidSection';


const useStyle=makeStyles(theme=>({
    component1:{
        padding:10,
        backgroundColor:'#f1f3f6'
    },
    component2:{
        padding:10,
        backgroundColor:'#f1f3f6',
        display:'flex',
    },
    component3:{
        padding:10,
        backgroundColor:'#f1f3f6',

    },
    sub:{
      width:'80%',
      [theme.breakpoints.down('md')]:{
        width:'100%'
      }
    },
    wrapper:{
        backgroundColor:'white',
        width:'20%',
        marginTop:-10,
        height:292,
        marginLeft:3,
        [theme.breakpoints.down('md')]:{
          display:'none'
        }
    },
    ad:{
        height:282,
        width:'96%',
        padding:5

    }
}))

function Home() {

    const classes=useStyle()

    //useselector hook for retrieving getProducts data from redux store
    const getProducts = useSelector(state => state.getProducts)
    const {products}=getProducts

    //usedispatch hook for calling the products API from server using axios ie retrieving data from server to store
    const dispatch=useDispatch()
    useEffect(() => {
      dispatch(getProduct())

    }, [dispatch])

    return (
        <div>
            <NavBar/>

            <Box className={classes.component1}>
              <Banner/>
            </Box>

            <Box className={classes.component2}>
                <Box className={classes.sub}>
                  <Slide title='Deal of the day' products={products}/>
                </Box>
                <Box className={classes.wrapper}>
                  <img src={adURL} alt="oops" className={classes.ad}/>
                </Box>
            </Box>

            <Box className={classes.component3}>
                <MidSection/>
            </Box>  

            <Box className={classes.component3}>
                <Box>
                  <Slide title='Discounts for you' products={products}/>
                </Box>
            </Box>

            <Box className={classes.component3}>
                <Box>
                  <Slide title='Suggested Items' products={products} />
                </Box>
            </Box>
            
            <Box className={classes.component3}>
                <Box>
                  <Slide title='Top selection' products={products} />
                </Box>
            </Box>
            
            <Box className={classes.component3}>
                <Box>
                  <Slide title='Recommended Items' products={products} />
                </Box>
            </Box>
            
            <Box className={classes.component3}>
                <Box>
                  <Slide title='Best Sellers' products={products}/>
                </Box>
            </Box>
            
            
        </div>
    )
}

export default Home
  