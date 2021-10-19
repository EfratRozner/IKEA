import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  useRouteMatch

} from "react-router-dom";
import ImageGridList from './ShowProductsByCategory';


import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));




function Products(){
  interface prod{
    name:string,
    price:BigInteger
  }

  let { path, url } = useRouteMatch();
    return(
      <div id="productsComponent">

        <Route path={`${path}`}>
          <div dir="rtl">
            <MenuList  id="categoryNav">
              <MenuItem>
                <Link to={`${url}/lighting`}>תאורה</Link>
              </MenuItem>
              <MenuItem>
                <Link to={`${url}/sofas`}>מערכות ישיבה</Link>
              </MenuItem>
              <MenuItem>
                <Link to={`${url}/yard`}>ריהוט לחצר</Link>
              </MenuItem>
              <MenuItem>
                <Link to={`${url}/smart`}>בית חכם</Link>
              </MenuItem>
              <MenuItem>
                <Link to={`${url}/children`}>חדרי ילדים</Link>
              </MenuItem>
            </MenuList>
            <div id="frame">
                
                <Route path={`${path}/:category`}>
                 <ImageGridList/>

              </Route>

            </div>


           
          
        
            
          </div>
          
        </Route>
        
    </div>
    )
        
    
}

export default Products