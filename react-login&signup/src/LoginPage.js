// from: https://w3codepen.com/html-css-login-form-page/


import React, {useState} from 'react'

export default function LoginPage({Login, error}) {
    // const [details, setDetails] = useState({name: "", email: "", password: "",});
    //
    // const submitHandler = e => {
    //     e.preventDefault();
    //
    //     Login(details);
    //
    // }

    return (
        <>
        <div className="container" id="container">
            <div className="form-container log-in-container">
                <form action="#">
                    <h1>Login</h1>
                    <div className="input-field">
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                    </div>
                    <button id="loginbtn">Log In</button>
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
                                <button id="btn-signup">Sign Up</button>
                                {/*<a href="#" className="btn btn-white btn-success">Sign Up</a>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}