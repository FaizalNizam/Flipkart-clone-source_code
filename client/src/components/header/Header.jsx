import {Link} from 'react-router-dom'
import {AppBar,Toolbar,makeStyles,Typography,Box, IconButton, Drawer, ListItem, List} from '@material-ui/core'
import {Menu} from '@material-ui/icons';
import { useState } from 'react';

//sub components
import Search from './Search';
import ButtonHead from './ButtonsInHeader';

const useStyle=makeStyles(theme=>({
    navbar:{
        background:'#2874f0',
        height:55
    },
    logo:{
        width:75

    },
    subURL:{
        width:10,
        height: 10,
        marginLeft: 4
    },
    Container:{
        display:'flex'

    },
    box:{
        marginLeft:'12%',
        lineHeight:0
    },
    subhead:{
        fontSize:10,
        fontStyle:'italic'
    },
    list:{
        width:'250px'
    },
    menuButton: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }  
    },
    buttonHead: {
        margin: '0 5% 0 auto', 
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        } 
    }   
}))


function Header() {
    const classes=useStyle()
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [open, setopen] = useState(false)//for handling the drawer

    const handleClose=()=>{
        setopen(false)
    }

    const handleOpen=()=>{
        setopen(true)
    }

    //function for listing the items in the drawer
    const list=()=>{
        return(
            <Box className={classes.list}>
                <List >
                    <ListItem button>
                        <ButtonHead/>
                    </ListItem>
                </List>
            </Box>
        )
    }


    return (
        <div>
            <AppBar className={classes.navbar}>
             <Toolbar>
                 <IconButton
                    color="inherit"
                    onClick={handleOpen}
                    className={classes.menuButton}
                 >
                    <Menu/> 

                 </IconButton>

                 <Drawer open={open} onClose={handleClose}>
                     {list()}
                 </Drawer>

                <Box className={classes.box}>
                    <Link to='/' style={{textDecoration:'none'}}><img className={classes.logo} src={logoURL} alt="oops" /></Link>
                    <Box className={classes.Container}>
                      <Typography className={classes.subhead}>Explore plus</Typography>
                      <img className={classes.subURL} src={subURL} alt="oops" />
                    </Box>
                </Box> 

                <Search/> 

                <span className={classes.buttonHead}><ButtonHead/></span>

             </Toolbar>
            </AppBar>
            
        </div>
    )
}

export default Header
