import { ButtonGroup,Button,makeStyles } from '@material-ui/core'
import React,{useState} from 'react'

const useStyles=makeStyles({
    component:{
        marginTop:20
    },
    button:{
        borderRadius:'50%'
    }
})

function GroupButton() {

    const classes=useStyles()
    const [counter, setCounter] = useState(0)

    const countDecrement=()=>{
        setCounter(counter=>counter-1)
    }

    const countIncrement=()=>{
        setCounter(counter=>counter+1)
    }

    return (
       <ButtonGroup className={classes.component}>
           <Button onClick={()=>countDecrement()} disabled={counter===1} className={classes.button}>-</Button>
           <Button>{counter}</Button>
           <Button onClick={()=>countIncrement()} className={classes.button}>+</Button>
       </ButtonGroup>
    )
}

export default GroupButton
