import React, { useState } from 'react'
import styles from "./navbar.module.css"
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";

const Navbar = () => {
    const [state, setState] = useState(false)
    
    return (
        <div className={styles.navbarContainer}>
            <h2>UI/UX design</h2>
            <div className={state ? styles.someList : styles.displayNone}>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about-page">About us</NavLink></li>
                    <li><NavLink to="/login">Log in</NavLink></li>
                </ul>
                <Link to="/signUp"><FaUserCircle /></Link>
                <GiCancel className={styles.iconNone} onClick = {()=>setState(false)}/>
            </div>
            <AiOutlineMenu className={styles.menuIcon} onClick = {()=>setState(true)}/>
        </div>
    )
}

export default Navbar
