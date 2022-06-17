import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from "../components/Storedata.module.css"
const Storedata = () => {
const {id}=useParams()
const [Storedata,setstoredata]=useState({})
useEffect(()=>{
  fetch(`http://localhost:8080/store/${id}`).then((r)=>r.json()).then((d)=>setstoredata(d))
},[id]);
  return (
    <div className={styles.more}>
      <div>
        <img src={Storedata.image2}></img>
      </div>
      <div className={styles.box}>
      <div>
        <img src={Storedata.image}></img>
      </div>
      <div>
      <h3>{Storedata.name}</h3>
      <p>{Storedata.para}</p>
      <h3>{Storedata.price}</h3>
      <button>Add to Cart</button>
      </div>
      </div>
    </div>
  )
}

export default Storedata