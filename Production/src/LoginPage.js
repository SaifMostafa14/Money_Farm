// from: https://w3codepen.com/html-css-login-form-page/

import React, {useState} from 'react'
import {Link} from "react-router-dom";
import axios from "axios";
// import './App.css';

export default function LoginPage({Login, error}) {
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");

    const login = () => {
        axios.get('http://localhost:9999/api/login', {
            email: email,
            pass: pass,
        }).then((response) => response.json());
    };

    return (<>
        <body className='login-body'>
        <div className="container" id="loginpage-container">
            <div className="form-container log-in-container">
                <form className="form-tag">
                    <h1 id='login-h1'>Login</h1>
                    <div className="input-field">
                        <input className='input-tag' type="email" placeholder="Email" onChange={(e) => {
                            setemail(e.target.value);
                        }}/>
                        <input className='input-tag' type="password" placeholder="Password" onChange={(e) => {
                            setpass(e.target.value);
                        }}/>
                    </div>
                    <Link to="/HomePage">
                        <button className="button-tag" id="loginbtn" onClick={login}>Log In</button>
                    </Link>
                    <span>-----------OR-----------</span>
                    <div className="social-container">
                        <a href="#" className="social a-tag"><i className="fa fa-facebook fa-2x"/></a>
                        <a href="#" className="social a-tag"><i className="fab fa fa-twitter fa-2x"/></a>
                    </div>
                    <a href="#" className='a-tag'>Forgot your password?</a>
                </form>
            </div>

            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-right">
                        <div
                            className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                            <div className="text w-100">
                                <h2 className='h2-tag'>Welcome to GreenPocket</h2>
                                <p id="p-signup">Don't have an account?</p>
                                <Link to="/SignupPage">
                                    <button className="button-tag" id="btn-signup">Sign Up</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </body>
    </>)
}