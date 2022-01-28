import { Grid } from '@material-ui/core'
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
        <Grid container lg={12} sm={12} md={12} xs={12} className={classes.component}>
            {
                ImageURL.map((data)=>
                  <Grid item lg={4} md={4} sm={12} xs={12} >
                      <img src={data} alt="oops" style={{width:'100%'}} />
                  </Grid>    
                )
            }
        </Grid>
    )
}

export default MidSection
