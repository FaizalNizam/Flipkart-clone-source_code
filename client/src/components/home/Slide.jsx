import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {makeStyles,Box, Typography,Divider} from '@material-ui/core'

const useStyle=makeStyles({
    image:{
        height:120,
        marginTop:20
        
    },
    component:{
        backgroundColor:'#ffffff',
        marginTop:-10,

    },
    deal:{
        paddingTop:5,
        paddingBottom:20,
        paddingLeft:10,
        fontWeight:'bold'
    },
    text:{
      fontSize:14,
      marginTop:5
    }
})


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


function Slide(props) {

    const classes=useStyle()

    return (
      <Box className={classes.component}>
       <Typography className={classes.deal}>{props.title}</Typography> 
       <Divider/>  
       <Carousel 
         responsive={responsive}
         infinite={true}
         draggable={false}
         swipeable={false}
         centerMode={true}
         autoPlay={false}
         autoPlaySpeed={1000}
         keyBoardControl={true}
         showDots={false}
         removeArrowOnDeviceType={["mobile","tablet"]}
         dotListClass="custom-dot-list-style"
         itemClass="carousel-item-padding-40-px"
         containerClass="carousel-container"
         >

           {
               props.products.map((data)=>
                  <Box textAlign="center">
                    <img src={data.url} alt="oops" className={classes.image} />
                    <Typography className={classes.text} style={{fontWeight:600,color:'#212121'}}>{data.title.shortTitle}</Typography>
                    <Typography className={classes.text} style={{color:'green'}}>{data.discount}</Typography>
                    <Typography className={classes.text} style={{color:'#212121',opacity:'.6'}}>{data.tagline}</Typography>
                  </Box>  
               )
           }
     
       </Carousel>
      </Box>   
    )
}

export default Slide
