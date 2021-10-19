import React,{createContext,useState,useEffect} from 'react';
import axios from 'axios';



export const proudutContext = createContext([]);


export default function ProductsContext(props:{children:any}) {
    
  
    interface DB{
      allProducts:[],
      setProducts:Function 
    }
    const [allProducts, setProducts]:[any,Function] = useState({});

    
    useEffect(() => {
        axios.get('/Data.json')
        .then((data) => {

        setProducts({allProducts:data.data
        ,setProducts:(a:[])=>{
            setProducts({allProducts : [...a], setProducts : setProducts})
        }});
      })
    }, []);
  
 
    return (
    <proudutContext.Provider value={allProducts}>
      { props.children }
    </proudutContext.Provider>
    );
  }