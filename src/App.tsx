import React, { useContext } from 'react';
import './App.css';
import IKEA from './IKEA';
import About from './About';
import Products from './Products';
import Payment from './Payment';
import Management from './Management';
import ShopingCart from './ShopingCart';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {


  
  return (



   
    <Router>
      

      <nav>
          <ul>
            <li>
              <Link to="/" >דף הבית</Link>
            </li>
            <li>
              <Link to="/About">אודות</Link>
            </li>
            <li>
              <Link to="/Products" className="yellow-blue">כל מוצרים</Link>
            </li>
            <li>
              <Link to="/Payment">לתשלום</Link>
            </li>
            <li>
              <Link to="/Management">ניהול</Link>
            </li>
            <li>
              <Link to="/ShopingCart" className="white-blue">עגלת קניות</Link>
            </li>
          </ul>
        </nav>

      <Switch>
        <Route path="/About" component={About} />
        <Route path="/Products" component={Products} />
        <Route path="/Payment" component={Payment} />
        <Route path="/Management" component={Management} />
        <Route path="/ShopingCart" component={ShopingCart} />
        <Route path="/" component={IKEA}  />
      </Switch>
    </Router>
  );
}

export default App;
