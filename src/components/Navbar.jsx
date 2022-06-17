import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from "../components/Navbar.module.css"
import { Authcontext } from './Contextprovider'
const Navbar = () => {
    const [state,dispatch]=useContext(Authcontext)
    // console.log(isAuth)
  return (
    <div className={styles.navbar}>
        <div >
            <img className={styles.logo} src="https://www.getfynd.com/blog/2016/12/15/why-did-apple-choose-an-apple-with-a-bite-out-of-it-for-its-logo/why-did-apple-choose-an-apple-with-a-bite-out-of-it-for-its-logo.jpg" alt='applelogo'></img>
        </div>
        <div className={styles.middle}>
            <p>
                <Link to="/store" className={styles.link}>
                Store</Link></p>
            <p><Link to="/mac" className={styles.link}>
                Mac</Link></p>
            <p><Link to="/ipad" className={styles.link}>
                iPad</Link></p>
            <p><Link to="/iphone" className={styles.link}>
                iPhone</Link></p>
            <p><Link to="/watch" className={styles.link}>
                Watch</Link></p>
            <p><Link to="/airpods" className={styles.link}>
                AirPods</Link></p>
        </div>
        <div className={styles.last}>
            <p><Link to="/login" className={styles.link}>{state.isAuth ?"Logout":"Login"}</Link></p>
            <p>Search</p>
            <p>Cart</p>
        </div>
    </div>
  )
}

export default Navbar