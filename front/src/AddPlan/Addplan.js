


import React, { useState } from 'react';
import axios from 'axios'
// import "./register.css"
import { Navigate, useNavigate } from 'react-router-dom';
export default function Register(){
    const[price,setPrice]=useState()
    const[validity,setValidity]=useState()
    const[description,setDescription]=useState()
    const[planId,setPlanId]=useState()
    const navigate=useNavigate()
    // const[value,setValue]=useState({
    //     name:name,
    //     email:email,
    //     password:password
    // })
 const data=e=>{
    console.log(price+''+validity+''+description+''+planId);
    registerserver()
 }
 function registerserver(){
  axios.post('http://localhost:3000/api/admin/addplan',{
   price,
   validity,
   description,
   planId
  }).then(res=>{
    if(res.data==='Plan Added Successfully') {
        navigate('/plan')
        return alert('Plan Added Successfully')}
  } )
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
        placeholder="Price"
        onChange={e=>setPrice(e.target.value)}
        /><br></br><br></br>
          <input type="text" placeholder="Validity"  onChange={e=>setValidity(e.target.value)}/><br></br><br></br>
          <input type="text" placeholder="Description"  onChange={e=>setDescription(e.target.value)}/><br></br><br></br>
          <input type="text" placeholder="planId"  onChange={e=>setPlanId(e.target.value)}/><br></br><br></br>
         
        </form>
        <br></br><br></br>
          <button onClick={data} >Register</button>
      </div>
    </div>    
    </div>
    </center> </>
   )
}