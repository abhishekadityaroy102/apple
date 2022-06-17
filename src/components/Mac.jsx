import React, { useEffect, useState } from 'react'
import styles from "../components/Store.module.css"
const Mac = () => {
    const [mac,setmac]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/Mac").then((r)=>r.json()).then((d)=>setmac(d))
    },[])
  return (
    <div className={styles.store}>{
    mac.map((el)=>(
        <div>
            <div className={styles.imagebox}>
                <img src={el.image}></img>
            </div>
            <p>{el.name}</p>
        </div>
    ))
    }</div>
  )
}

export default Mac