import { Box } from '@material-ui/core'
import React from 'react'
import {ImageURL} from '../../constants/constants'
import {makeStyles} from'@material-ui/core'

const useStyle=makeStyles({
    component:{
        display:'flex',
        justifyContent:'space-between',
        marginTop:-10
    }
})

function MidSection() {
 
    const classes=useStyle()

    return (
        <Box className={classes.component}>
            {
                ImageURL.map((data)=>
                  
                      <img src={data} alt="oops" style={{width:'33%'}} />
                )
            }
        </Box>
    )
}

export default MidSection
