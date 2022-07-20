import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from "../components/Navbar.module.css"
import { Authcontext } from './Contextprovider'
const Navbar = () => {
    const [state,dispatch]=useContext(Authcontext)
    const active = {
        color: "red",
        textDecoration: "none"
      };
      const basestyle = {
        textDecoration: "none",
        color: "white"
      };
    // console.log(isAuth)
  return (
    <div className={styles.navbar}>
        <div className={styles.logobox}>
            <img className={styles.logo} src="https://www.getfynd.com/blog/2016/12/15/why-did-apple-choose-an-apple-with-a-bite-out-of-it-for-its-logo/why-did-apple-choose-an-apple-with-a-bite-out-of-it-for-its-logo.jpg" alt='applelogo'></img>
        </div>
        <div className={styles.middle}>
            <p>
                <NavLink to="/store" style={({isActive})=>(isActive ? active:basestyle)} className={styles.link}>
                Store</NavLink></p>
            <p><NavLink  style={({isActive})=>(isActive ? active:basestyle)} to="/mac" className={styles.link}>
                Mac</NavLink></p>
            <p><NavLink  style={({isActive})=>(isActive ? active:basestyle)} to="/ipad" className={styles.link}>
                iPad</NavLink></p>
            <p><NavLink  style={({isActive})=>(isActive ? active:basestyle)} to="/iphone" className={styles.link}>
                iPhone</NavLink></p>
            <p><NavLink  style={({isActive})=>(isActive ? active:basestyle)} to="/watch" className={styles.link}>
                Watch</NavLink></p>
            <p><NavLink  style={({isActive})=>(isActive ? active:basestyle)} to="/airpods" className={styles.link}>
                AirPods</NavLink></p>
        </div>
        <div className={styles.last}>
            <p><NavLink  style={({isActive})=>(isActive ? active:basestyle)} to="/login" className={styles.link}>{state.isAuth ?"Logout":"Login"}</NavLink></p>
            <p>Search</p>
            <p>Cart</p>
        </div>
    </div>
  )
}

export default Navbar