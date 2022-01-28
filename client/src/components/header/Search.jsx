import React,{useEffect,useState} from 'react'
import {makeStyles,InputBase, ListItem, List} from '@material-ui/core'
import {Search} from '@material-ui/icons';
import {useSelector,useDispatch} from 'react-redux'
import { getProduct } from '../../redux/action/productAction'
import { Link } from 'react-router-dom';

const useStyle=makeStyles((theme)=>({
    search: {
        borderRadius: 2,
        marginLeft: 12,
        width: '160%',
        backgroundColor: '#fff',
        display: 'flex',
        [theme.breakpoints.down('sm')]:{
          width:'100%'
        }
      },
      searchIcon: {
        marginLeft: 'auto',
        padding: 5,
        display: 'flex',
        color: 'blue'
      },
      inputRoot: {
        fontSize: 'unset',
        width: '100%'
      },
      inputInput: {
        paddingLeft: 20,
        width: '100%',
      },
      list: {
        position: 'absolute',
        color: '#000',
        background: '#FFFFFF',
        marginTop: 36
      }
}))

function SearchBar() {
   const classes=useStyle() 

   const [ text, setText ] = useState();
   const [open,setOpen] = useState(true)

    //useselector hook for retrieving getProducts data from redux store
    const getProducts = useSelector(state => state.getProducts)
    const {products}=getProducts

    //usedispatch hook for calling the products API from server using axios ie retrieving data from server to store
    const dispatch=useDispatch()
    useEffect(() => {
      dispatch(getProduct())
    }, [dispatch])

    //getText function
    const getText=(text)=>{
      setText(text)
      setOpen(false)
    }


    return (
        <div>
          <div className={classes.search}>

            <InputBase
              placeholder="Search for products, brands and more"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e)=>getText(e.target.value)}
            />

            <div className={classes.searchIcon}>
              <Search />
            </div>

            {
              text&&
              <List className={classes.list} hidden={open}>
                {
                  products.filter((product)=>product.title.longtitle.toLowerCase().includes(text.toLowerCase())).map((product)=>(
                    <ListItem>
                      <Link to={`/product/${product.id}`} style={{textDecoration:'none', color:'inherit'}} onClick={()=>setOpen(true)}>
                        {product.title.longTitle}
                      </Link>  
                    </ListItem>
                  ))
                }
                
              </List>
            }

          </div>
        </div>
    )
}

export default SearchBar
