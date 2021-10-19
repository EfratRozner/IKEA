import React, { useContext } from 'react'
import { useParams} from 'react-router';

import { proudutContext } from './PoductsContext';
import Product from './Product';
import Iproduct from './Iproduct';
import { Icategory } from './Iproduct';


function ShowProductsByCategory(){
    
    interface prod {
        category:string,
    }
    interface prodContext{
        allProducts:[],
        setProducts:Function
    }
    
    const p:prod=useParams()
    const category=p.category;
    
    let prodManegement:any=useContext(proudutContext)
   
  




    const getProducts:any=()=>{
        return prodManegement.allProducts.find((arr:Icategory)=>arr.categoryName==category).data;
    }

    return(
        <div>
        {
            prodManegement.allProducts?
            <ul id="products">
                { getProducts().map((p:Iproduct) => <li  className="singleProduct" id={p.name}><Product prod={p} /> </li>) }     
            </ul>:
            <div></div>
        }
        </div>
        
       
        
    );
}

export default ShowProductsByCategory