
//login.jsx
import React from "react";

import './login.css';
import { Card } from '@mui/material';
export default function Login()
{
    return(
        <>

          <Card elevation={15} className='mycard'>
          <h1 className="logtext">LOGIN HERE</h1>
          <div className='main'>
            <form>
                <h4 className="ent">Enter the details</h4>
                <div className="login1">
                    <input type="text" className="user" placeholder="Username"/>
                    
                     <input type="text" placeholder="Password"/>
                     <input type="submit" className="roun" placeholder="login"/>

                </div>
            </form>

          </div>

            </Card>                 
              
              
                            
                   
        </>
    )
}