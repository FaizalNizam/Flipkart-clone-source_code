import React from 'react'
import Carousel from 'react-material-ui-carousel'
import {makeStyles} from '@material-ui/core'
import {bannerData} from '../../constants/constants'

const useStyle=makeStyles(theme=>({
    img:{
        width:'100%',
        height:300,
        [theme.breakpoints.down('sm')]:{
            objectFit:'cover',
            height:180
        }
    }
}))

function Banner() {
     
    const classes=useStyle()

    return (
        <Carousel
            autoPlay={true}
            animation='slide'
            swipe={true}
            indicators={false}
            cycleNavigation={true}
            navButtonsAlwaysVisible={true}
        
        >
            {
                bannerData.map((data)=>(
                  <img className={classes.img} src={data} alt="oops" />
                ))
            }
        </Carousel>
        
    )
}

export default Banner
