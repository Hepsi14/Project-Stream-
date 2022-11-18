


import React, { useState } from 'react';
import axios from 'axios'
import "./register.css"
import { Navigate, useNavigate } from 'react-router-dom';
export default function Register(){
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const[phoneno,setPhoneno]=useState()
    const navigate=useNavigate()
    // const[value,setValue]=useState({
    //     name:name,
    //     email:email,
    //     password:password
    // })
 const data=e=>{
    console.log(name+''+email+''+password+''+phoneno);
    registerserver()
 }
 function registerserver(){
  axios.post('http://localhost:3000/api/register',{
    name:name,
    email:email,
    password:password
  }).then(res=>{
    if(res.data==='already registered') return alert('already registered')
    if(res.data==='User Added') {
      navigate('/')
      return alert('User Added')}
  }
  )
 }
//  console.log(data);
   return(
    
    <><center >

<div className='cube'>
        <div className="login-page">
      <div className="form">
        <div className="login">
          <div className="login-header">
            <h3 class='text'>Register</h3>
           
          </div>
        </div><br></br>
        <form className="login-form">
        <input type="text" 
        placeholder="Name"
        onChange={e=>setName(e.target.value)}
        /><br></br><br></br>
          <input type="text" placeholder="Email"  onChange={e=>setEmail(e.target.value)}/><br></br><br></br>
          <input type="password" placeholder="Password"  onChange={e=>setPassword(e.target.value)}/><br></br><br></br>
          <input type="text" placeholder="Phone No(optional)"  onChange={e=>setPhoneno(e.target.value)}/><br></br><br></br>
         
        </form>
        <br></br><br></br>
          <button onClick={data} >Register</button>
      </div>
    </div>    
    </div>
    </center> </>
   )
}