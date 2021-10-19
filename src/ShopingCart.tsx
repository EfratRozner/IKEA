import React from 'react';
import {observer} from 'mobx-react';
import { theCart } from './TheCart';
import CartProd from './CartProd';



function ShopingCart(){
    return(
        <div>
        {theCart.length!=0?
            <ul dir="rtl">
            {
                theCart.map((prod)=><CartProd prod={prod} id={prod.name}></CartProd>)
            }
            </ul>:
            <div id="noDetails">אין עדיין מוצרים בעגלה</div>}
        </div>
        
    )
        
    
}

export default observer(ShopingCart)