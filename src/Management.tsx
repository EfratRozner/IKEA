import React, { useState ,useContext} from 'react';
import { proudutContext } from './PoductsContext';


function Management(){
    const [describe,setDescribe]=useState('');
    const [price,setPrice]=useState(0);
    let prodManegement:any=useContext(proudutContext);
    const [index,setIndex]=useState(0);


    const addProductToList=(event:{preventDefault:Function})=>{
        event.preventDefault();
        const product={
           name:describe,
           price:price 
        }

        prodManegement.allProducts[index].data.push(product);
        prodManegement.setProducts([...prodManegement.allProducts])
        setDescribe('');
        setPrice(0);
        setIndex(0);

        
   };

    const addCharToPrice=(e:string)=>{        
        try{
            setPrice(parseInt(e));
        }catch{

        }
    }

  
    return(
        <div id="center"  dir="rtl">
              <form onSubmit={addProductToList}>
                 <label>תאור מוצר:</label>
                 <br></br>
                 <input type="text" required={true} value={describe} onChange={e=>setDescribe(e.target.value.toString())}></input>
                 <br></br>

                 <label>מחיר:</label>
                 <br></br>
                 <input type="text" value={price.toString()} onChange={e=>addCharToPrice(e.target.value)}></input>
                 <br></br>
                 <select required={true} onChange={e=>setIndex(parseInt(e.target.value))}>
                    <option value="0">תאורה</option>
                    <option value="1"> מערכות ישיבה</option>
                    <option value="2">ריהוט לחצר</option>
                    <option value="3">בית חכם</option>
                    <option value="4">חדרי ילדים</option>
                </select>
                 <button type="submit">שמירה</button>
             </form> 
         </div>
    )
        
    
}

export default Management




















