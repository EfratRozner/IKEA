import React from 'react';



function CartProd(prop:any){

  
    
    return(
        
        <li className="prodInCart">
           <span>{prop.prod.name}</span>
           <br/>
           <span dir="rtl">{prop.prod.price}ש"ח</span>
           <br/>
           <span dir="rtl">כמות:{prop.prod.amount}</span>
           
        </li>
            

    )
}

export default CartProd

