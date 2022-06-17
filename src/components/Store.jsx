import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import styles from "../components/Store.module.css"
const Store = () => {
    const [store,setstore
]=useState([])   ;
useEffect(()=>{
fetch("http://localhost:8080/store").then((r)=>r.json()).then((d)=>setstore(d))}
,[])
  return (
    <div>
    <div className={styles.store}>
        {store.map((el)=>
        (<div key={el.id}>
           <Link to ={`/store/${el.id}`} className={styles.link}>
           <div><img src={el.image}></img></div>
            <p>{el.name}</p></Link> 
        </div>))}
       
    </div>
    <Outlet/>
    </div>
  )
}

export default Store