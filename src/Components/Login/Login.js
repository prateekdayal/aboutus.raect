import React from 'react';
import { FaUserAlt } from "react-icons/fa";
import { AiFillLock } from "react-icons/ai";
import "../Comman.css"

const Login = () => {
    return (
        <div className="LoginContainer">
            <div className="formContainer">
                <img src="https://c.saavncdn.com/941/GOKU-ULTRA-INSTINCT-RAP-Hindi-2021-20210905220010-500x500.jpg" />

                <form className="form">
                    <div>
                        <span><FaUserAlt /></span>
                        <input type="text" placeholder='User Name' />
                    </div>
                    <div>
                        <span><AiFillLock /></span>
                        <input type="text" placeholder='Password' />
                    </div>


                </form>
                <div className="loginBtn">
                    <button >Login</button>
                </div>
            </div>

        </div>
    )
}

export default Login
