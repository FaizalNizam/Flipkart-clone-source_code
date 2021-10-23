import {Link} from 'react-router-dom'
import {AppBar,Toolbar,makeStyles,Typography,Box} from '@material-ui/core'


//sub components
import Search from './Search';
import ButtonHead from './ButtonsInHeader';


const useStyle=makeStyles({
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
    }

   
})

function Header() {
    const classes=useStyle()
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';


    return (
        <div>
            <AppBar className={classes.navbar}>
             <Toolbar>
                <Box className={classes.box}>
                    <Link to='/' style={{textDecoration:'none'}}><img className={classes.logo} src={logoURL} alt="oops" /></Link>
                    <Box className={classes.Container}>
                      <Typography className={classes.subhead}>Explore plus</Typography>
                      <img className={classes.subURL} src={subURL} alt="oops" />
                    </Box>
                </Box> 

                <Search/> 

                <ButtonHead/>

             </Toolbar>
            </AppBar>
            
        </div>
    )
}

export default Header
