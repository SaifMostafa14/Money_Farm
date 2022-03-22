import React, {useState} from 'react'
import {Link} from "react-router-dom";
// import {Link} from 'react-router-dom';

export default function SignupPage({Login, error}) {
    // const [details, setDetails] = useState({name: "", email: "", password: "",});
    //
    // const submitHandler = e => {
    //     e.preventDefault();
    //
    //     Login(details);
    //
    // }

    return (
        <body>
        <div className="container" id="container">
            <div className="form-container log-in-container">
                <form action="#">
                    <h1>Sign Up</h1>
                    <div className="input-field">
                        <input type="text" placeholder="First name"/>
                        <input type="text" placeholder="Last name"/>
                        <input type="text" placeholder="Username"/>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                    </div>
                    {/*<Link to="./LoginPage"></Link>*/}
                    <button id="loginbtn">Sign Up</button>
                    {/*<span>-----------OR-----------</span>*/}
                    {/*<div className="social-container">*/}
                    {/*    <a href="#" className="social"><i className="fa fa-facebook fa-2x"/></a>*/}
                    {/*    <a href="#" className="social"><i className="fab fa fa-twitter fa-2x"/></a>*/}
                    {/*</div>*/}
                    {/*<a href="#">Forgot your password?</a>*/}
                </form>
            </div>

            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-right">
                        <div
                            className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                            <div className="text w-100">
                                <h2>Welcome to GreenPocket</h2>
                                <p id="p-signup">Already have an account?</p>
                                {/*<Link to="./SignupPage"></Link>*/}
                                <button id="btn-signup">Log in</button>
                                {/*<a href="#" className="btn btn-white btn-success">Sign Up</a>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </body>
    )
}