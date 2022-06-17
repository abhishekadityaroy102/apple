import React, { useContext, useState } from 'react'
import { Authcontext } from './Contextprovider'
import axios from "axios"
import { Navigate, useNavigate } from 'react-router-dom'
const Login = () => {
    const [state,dispatch]=useContext(Authcontext)
    const [data,setdata]=useState({
    })
    let {email,password}=data
    const handlechange=(e)=>{
      let {name,value}=e.target;
      setdata({
        ...data,[name]:value
      })
    }
    const handleclick=()=>{
  console.log(data)
    }
    const userlogin=({email,password})=>{
      return axios({
        url:"https://reqres.in/api/login",
        method:"post",
        data:{
          email,
          password
        }
      })
    }
    const navigate=useNavigate()
    const handlesubmit=(e)=>{
      e.preventDefault()
      userlogin({email,password}).then((res)=>{
        dispatch({type:"Loginsuccess"});
        alert("loginsuccess")
        navigate("/store")
      }).catch((error)=>{alert("login failed");
    setdata({email:"",password:""})})
      
    }
    if(state.isAuth){
     return <Navigate to="/store"/>
    }
  return (
    <div>Login
      <form onSubmit={handlesubmit}>
        <input type="email" placeholder='Enter your Email' name="email" value={data.email} onChange={handlechange}></input>
        <input type="text" placeholder='Enter your Password' name='password' value={data.password} onChange={handlechange}></input>
        <button onClick={handleclick}>Login</button>
      </form>
       
    </div>
  )
}

export default Login