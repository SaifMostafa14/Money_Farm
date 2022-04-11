// from: https://w3codepen.com/html-css-login-form-page/

import React, {useState} from 'react'
import {Link} from "react-router-dom";

export default function LoginPage({Login, error}) {


    
    return (<>
        <div className="container" id="container">
            <div className="form-container log-in-container">
                <form>
                    {/*<form action="#" onSubmit={(e) => {*/}
                    {/*    e.preventDefault();*/}
                    {/*    axios.post*/}
                    {/*}}>*/}
                    <h1>Login</h1>
                    <div className="input-field">
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                    </div>

                    <Link to="/LoginPage">
                        <button id="loginbtn">Log In</button>
                    </Link>
                    <span>-----------OR-----------</span>
                    <div className="social-container">
                        <a href="#" className="social"><i className="fa fa-facebook fa-2x"/></a>
                        <a href="#" className="social"><i className="fab fa fa-twitter fa-2x"/></a>
                    </div>
                    <a href="#">Forgot your password?</a>
                </form>
            </div>

            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-right">
                        <div
                            className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                            <div className="text w-100">
                                <h2>Welcome to GreenPocket</h2>
                                <p id="p-signup">Don't have an account?</p>
                                {/*<Link to="/SignupPage" className="btn" id="btn-signup">Sign Up</Link>*/}
                                <Link to="/SignupPage">
                                    <button id="btn-signup">Sign Up</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}