import React, { useEffect, useState } from 'react'
import styles from "../components/Store.module.css"
const Iphone = () => {
  const [iphone,setiphone]=useState([])
  useEffect(()=>{
    fetch("http://localhost:8080/iPhone").then((r)=>r.json()).then((d)=>setiphone(d))
  },[])
    return (
    <div className={styles.store}>
        {iphone.map((el)=>(
            <div>
                <div className={styles.imagebox}>
                    <img src={el.image}></img>
                </div>
                <p>{el.name}</p>
            </div>
        ))}
    </div>
  )
}

export default Iphone