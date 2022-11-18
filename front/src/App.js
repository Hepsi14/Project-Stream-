


import { HashRouter,  Route, Routes } from "react-router-dom";
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./Register/register";
import Nav from "./Nav/nav"
import Login from "./Login/Login"
// import Calculator from "./components/Calculator";
import Card from "./Card/Card";
import Upload from "../src/Upload/upload video";
import UserContext from "./context";
import Payplan from "./PayPlan/Payplan";
import Plan from './Plans/plan'
import BuyPlan from './BuyPlan/BuyPlan'
import AddPlan from './AddPlan/Addplan'
import { useState } from "react";
// 
export default function App() {
  const[token,setToken]=useState()
  const [user,setUser]=useState()
  return (
    <>
    <div>
 <HashRouter>
        {/* <Nav/> */}
          <UserContext.Provider value={{token,setToken,user,setUser}}>
          <Routes>
          <Route exact path="/" element={<Login />}/>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/Card" element={<Card />} />
          <Route exact path='/Payplan' element={<Payplan/>}/>
          <Route exact path="/upload video" element={<Upload/>} />
          <Route exact path="/plan" element={<Plan/>} />
          <Route exact path="/buyplan" element={<BuyPlan/>} />
          <Route exact path="/addplan" element={<AddPlan/>} />
         
          </Routes>
          </UserContext.Provider>
      
      </HashRouter>
      </div>
    </>
  );
}



