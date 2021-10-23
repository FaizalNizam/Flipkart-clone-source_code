import React from 'react'
import {navData} from '../../constants/constants'
import {Box, Typography,makeStyles} from '@material-ui/core'


const useStyle=makeStyles({
    container:{
        display:'flex',
        marginTop:60,
       
    },
    box:{
        textAlign:'center',
        padding:'12px 30px'
    },
    img:{
        width:70
    },
    text:{
        fontSize:14,
        fontWeight:500
    }

})

function NavBar() {

    const classes=useStyle()

    return (
        <Box className={classes.container}>
            {
                navData.map(data=>(
                <Box className={classes.box}>
                    <img className={classes.img} src={data.url} alt="oops" />
                    <Typography className={classes.text}>{data.text}</Typography>
                </Box>    
                ))
            }
        </Box>
       
    )
}

export default NavBar
