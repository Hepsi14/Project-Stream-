// import  React, { useState } from 'react';
import axios from 'axios'
import React, { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'
import UserContext from '../context'

// import "../index.css"
export default function App(){
  const navigate=useNavigate()
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const head=useContext(UserContext)
    // const[value,setValue]=useState({
    //     email:email,
    //     password:password
    // })

    function loginserver(){
     axios.post('http://localhost:3000/api/admin/login',{
      email:email,
      password:password
     })
     .then(response=>{
      if(response.data==="There is no Email") return alert('There is no Email')
      if(response.data==='incorrect password')return alert('incorrect password')
      
      head.setToken(response.data)
      navigate('/Card')
     })
    }

    const data=e=>{
        // setValue({...value,[e.target.name]:e.target.value})
        console.log(email+''+password)
        loginserver()
    }
    // console.log(data)
   return(
    <><center>
   
      <div  class='cube'>
       
        <div className="login-page">
      <div className="form">
        <div className="login">
          <div className="login-header">
            <h3 class='text'>Log In Your Account</h3>
           
          </div>
        </div>
        <form className="login-form"><br></br>
        
          <input type="text" placeholder="Email"  onChange={e=>setEmail(e.target.value)}/>
          <br></br>
          <br></br>
          <input type="password" placeholder="Password"  onChange={e=>setPassword(e.target.value)}/>
          <br></br><br></br>
         
        </form>
          <button onClick={data}  >Login</button>
          <button onClick={()=>{navigate('/register')}}>Register</button>
      </div>
    </div>   
    </div>
 
    </center>     </>
   )
}