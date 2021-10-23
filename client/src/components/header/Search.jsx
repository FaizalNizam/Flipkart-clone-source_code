import React from 'react'
import {makeStyles,InputBase} from '@material-ui/core'
import {Search} from '@material-ui/icons';

const useStyle=makeStyles((theme)=>({
    search: {
        borderRadius: 2,
        marginLeft: 12,
        width: '160%',
        backgroundColor: '#fff',
        display: 'flex'
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
    }
}))

function SearchBar() {
   const classes=useStyle() 

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
            />
            <div className={classes.searchIcon}>
              <Search />
            </div>
          </div>
        </div>
    )
}

export default SearchBar
