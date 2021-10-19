import React, { useState } from 'react';
import {observer} from 'mobx-react';
import { theCart } from './TheCart';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));





function Payment(){
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');
    
      const handleChange = (event:{target:{value:string}}) => {
        setValue(event.target.value);
      };
    let  [toPay,setToPay]=useState(false);
    let  [ok,setOk]=useState(false);
    const save=()=>{
        
    }

    

    const pay=(event:any)=>{
        event.preventDefault();        
        setToPay(true)
    }

    const sum=()=>{
        let s=0;
        theCart.forEach(p => {
            s+=p.price*p.amount
        });
        return s;

    }

    const OK=(event:any)=>{
        event.preventDefault();        
        setOk(true);
    };

    return(
        <div dir="rtl" className="payment">
        
            <h3>סכום לתשלום: {sum()}</h3>
            <div dir="rtl">

            <form className="customerDetails" onSubmit={pay}>
                <TextField className="input"
                    id="outlined-multiline-flexible"
                    label="שם פרטי"
                    multiline
                    rowsMax={4}
                    onChange={handleChange}
                    variant="outlined"
                    required={true}
                    
                    />

                <TextField
                    className={"input"}
                    id="outlined-multiline-flexible"
                    label="שם משפחה"
                    multiline
                    rowsMax={4}
                    onChange={handleChange}
                    variant="outlined"
                    required={true}

                />


                <TextField
                    className={"input"}
                    id="outlined-multiline-flexible"
                    label="כתובת"
                    multiline
                    rowsMax={4}
                    onChange={handleChange}
                    variant="outlined"
                    required={true}

                />
                
                
                <TextField
                    className={"input"}
                    id="outlined-multiline-flexible"
                    label="מספר טלפון"
                    multiline
                    rowsMax={4}
                    onChange={handleChange}
                    variant="outlined"
                    required={true}

                />

                <TextField
                    className={"input"}
                    id="outlined-multiline-flexible"
                    label="כתובת מייל"
                    multiline
                    rowsMax={4}
                    onChange={handleChange}
                    variant="outlined"
                    dir="rtl"
                    required={true}

                />
                

                {
                    !ok?<button type="submit">לתשלום</button>: <span></span>
  
                }
                


            </form>
            </div>
 
            

            {
                    
                    !ok &&toPay?
                    <form onSubmit={OK} className="payment-form">
                        <label>מספר אשראי</label>
                        <input type="text" required={true} minLength={6} maxLength={16}></input>
                        <br/>
                        <label>תוקף</label>
                        <input type="number" required={true} min={2020} max={2060}></input>
                        <label>/</label>
                        <input type="number" required={true}min={1} max={12}></input>
                        <br/>
                        <label>שלוש ספרות בגב הכרטיס</label>
                        <input type="number" required={true} max={999} min={100}></input>
                        <br/>
                        <button type="submit">אישור</button>
                    </form>
                    

                     : <div></div>

                }
                <div>

                {
                    ok ? 
                    <div>
                        <h3>הזמנתך התקבלה בהצלה</h3>

                    </div>
                    :
                    <div>
                        
                    </div>
                }

                </div>


                

                

        </div> 

        
        
    )
        
    
}

export default observer(Payment)














