import React, {useState} from 'react'
import {Link} from "react-router-dom";


export default function SignupPage({Login, error}) {
    // const [details, setDetails] = useState({name: "", email: "", password: "",});
    //
    // const submitHandler = e => {
    //     e.preventDefault();
    //
    //     Login(details);
    //
    // }

    return (<>
        <body>
        <div className="container" id="container">
            <div className="form-container log-in-container">
                <form action="#">
                    <h1 id="Signup-h1">Sign Up</h1>
                    <div className="input-field">
                        <input type="text" placeholder="First name"/>
                        <input type="text" placeholder="Last name"/>
                        {/*<input type="text" placeholder="Username"/>*/}
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                    </div>
                    {/*<Link to="./LoginPage"></Link>*/}
                    {/*<button id="loginbtn">Sign Up</button>*/}
                    <Link to="/PlaidApp">
                        <button id="signup-btn">Sign Up</button>
                    </Link>
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
                                {/*<button id="btn-signup">Log in</button>*/}
                                <Link to="/LoginPage">
                                    <button id="btn-signup">Log in</button>
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
