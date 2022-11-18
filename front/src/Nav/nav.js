// import "bootstrap/dist/css/bootstrap.min.css";
import React ,{useState,useContext}from "react";
import UserContext from "../context";
import { useNavigate } from "react-router-dom";


export default function Nav(){
  const navigate=useNavigate()
    const head=useContext(UserContext)
    return(<>

 
    <ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link active" href="#/plan">Plans</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#/upload video">Upload Vedio</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" onClick={()=>
    {head.setToken(null)
    navigate('/')}
    }>Logout</a>
  </li>
 
</ul></>)
}

