import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Plan.css'
import UserContext from '../context'

const Plan = () => {
    const navigate=useNavigate()
    const head=useContext(UserContext)
    const [plans,setPlans]=useState([])
    const [user,setUser]=useState()
    async function getplans(){
        axios.get('http://localhost:3000/api/admin/getplans')
        .then(res=>setPlans(res.data))
    }
    async function getuser(){
        axios.get('http://localhost:3000/api/admin/getuser',{
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json',
                'x-auth-token':head.token
            }
        }).then(res=>{
            console.log(res.data);
            setUser(res.data)})
    }
    useEffect(()=>{
        getplans()
        getuser()
    },[0])
    return (
        
<>

       


        <table >
            <thead>
            <td>Plan ID</td><br></br>
            <td>Price</td><br></br>
            <td>Validity</td><br></br>
            <td>Description</td>
            </thead>
            {plans.map(item=>{return(
                <tbody>
                <td>{item.planId}</td><br></br>
                <td>{item.price}</td><br></br>
                <td>{item.validity}</td><br></br>
                <td>{item.description}</td><br></br>
                </tbody>
            )})}
        </table>

        <div >
           {user?<>{user.isAdmin?null:<button onClick={()=>navigate('/buyplan')}>Buy Plan</button>}
            {user.isAdmin?<button onClick={()=>navigate('/addplan')}>Add Plan</button>:null}</>:null}
            

        </div>
        </>
    );
}

export default Plan;