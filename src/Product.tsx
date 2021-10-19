import React from 'react';

import { AddToCart } from './TheCart';
import Iproduct from './Iproduct';



function Product(prop:{prod:Iproduct}){

    
    let amount=1;

    const setAmount=(a:number)=>{
        amount=a
    }
     
    
    return(
        
        <div dir="rtl">
           <span>{prop.prod.name}</span>
           <br/>
           <span>{prop.prod.price}ש"ח</span>
           <br/>
           <label>כמות:</label>
           <input type="number" onChange={e=>setAmount(parseInt(e.target.value))}/>
           {
                prop.prod.img?
                <img src={`../item-img/${prop.prod.img}`}></img>:
                <div>לצערנו אין תמונה של מוצר זה:(</div>
           }
          
           <button onClick={e=>AddToCart({name:prop.prod.name,price:prop.prod.price,amount:amount,img:""})}>הוסף לסל</button>
        </div>
            

    )
}

export default Product

