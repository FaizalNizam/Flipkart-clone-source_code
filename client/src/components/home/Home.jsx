import React from 'react'
import {makeStyles,Box} from '@material-ui/core'
import { adURL} from '../../constants/constants';
//components
import Banner from './Banner'
import NavBar from './NavBar'
import Slide from './Slide'
import MidSection from './MidSection';

const useStyle=makeStyles({
    component:{
        padding:10,
        backgroundColor:'#f1f3f6'
    },
    component2:{
        padding:10,
        backgroundColor:'#f1f3f6',
        display:'flex'

    },
    component3:{
        padding:10,
        backgroundColor:'#f1f3f6',

    },
    wrapper:{
        backgroundColor:'white',
        width:'20%',
        marginTop:-10,
        height:292,
        marginLeft:3
    },
    ad:{
        height:282,
        width:'96%',
        padding:5

    }


})

function Home() {

    const classes=useStyle()

    return (
        <div>
            <NavBar/>
            <Box className={classes.component}>
              <Banner/>
            </Box>
            <Box className={classes.component2}>
                <Box style={{width:'80%'}}>
                  <Slide title='Deal of the day'/>
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
                  <Slide title='Discounts for you' />
                </Box>
            </Box>

            <Box className={classes.component3}>
                <Box>
                  <Slide title='Suggested Items' />
                </Box>
            </Box>
            
            <Box className={classes.component3}>
                <Box>
                  <Slide title='Top selection' />
                </Box>
            </Box>
            
            <Box className={classes.component3}>
                <Box>
                  <Slide title='Recommended Items' />
                </Box>
            </Box>
            
            <Box className={classes.component3}>
                <Box>
                  <Slide title='Best Sellers' />
                </Box>
            </Box>
            
            
        </div>
    )
}

export default Home
