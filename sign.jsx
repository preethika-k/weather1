import React from "react";
import './sign.css';
import { Card } from '@mui/material';
export default function Sign()
{
    return(
        <>
           <Card elevation={15} className='card2'>
      <Card elevation={15} className='card1'>
       <h1 className="log">SIGN UP</h1>
       <form>
        <div className="loginh">
          <input type="text" placeholder="UserName" />
          <input type="text" placeholder="Password"/>
          <input type="text" placeholder="Email"/>
          <input type="submit" className="roun1" placeholder='Sign Up'/>
        </div>
       </form>
       </Card>
       </Card>
       
                         
              
              
                            
                   
        </>
    )
}