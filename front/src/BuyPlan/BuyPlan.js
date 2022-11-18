import React, { useState,useContext } from 'react';
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom';
import UserContext from '../context';
export default function Register(){
  
    const[planId,setPlanId]=useState()
    const navigate=useNavigate()
    
    const head=useContext(UserContext)
    // const[value,setValue]=useState({
    //     name:name,
    //     email:email,
    //     password:password
    // })
 const data=e=>{
    console.log(planId);
    registerserver()
 }
 function registerserver(){
  axios.put('http://localhost:3000/api/buyplan',{
    planId
  },{headers:{
    'Content-Type':'application/json',
                'Accept':'application/json',
                'x-auth-token':head.token
  }}).then(res=>{
    if(res.data==='Successfull subscribed') {
        navigate('/plan')
        return alert('Successfull subscribed')
    }
  }  )
 }
//  console.log(data);
   return(
    
    <><center >

<div className='cube'>
        <div className="login-page">
      <div className="form">
        <div className="login">
          <div className="login-header">
            <h3 class='text'>Buy Plan</h3>
           
          </div>
        </div><br></br>
        <form className="login-form">
        <input type="text" 
        placeholder="Plan ID"
        onChange={e=>setPlanId(e.target.value)}
        /><br></br><br></br>
          
        </form>
        <br></br><br></br>
          <button onClick={data} >Buy</button>
      </div>
    </div>    
    </div>
    </center> </>
   )
}