import React, {useState} from 'react'
import {Link} from "react-router-dom";
import axios from 'axios';

export default function SignupPage({Login, error}) {
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");

    const signup = () => {
        axios.post('http://localhost:3000/SignupPage', {
            firstname: firstname,
            lastname: lastname,
            email: email,
            pass: pass,
        }).then((response) => {
            console.log(response);
        });
    };

    return (<>
        <body>,
        <div className="container" id="container">
            <div className="form-container log-in-container">
                {/*<form action="#" onSubmit={(e) => {*/}
                    {/*    e.preventDefault();*/}
                    {/*    axios.post*/}
                    {/*}}>*/}
                <form action="#">
                    <h1 id="Signup-h1">Sign Up</h1>
                    <div className="input-field">
                        <input type="text" placeholder="First name" onChange={(e) => {
                            setfirstname(e.target.value);
                        }} />
                        <input type="text" placeholder="Last name" onChange={(e) => {
                            setlastname(e.target.value);
                        }} />
                        {/*<input type="text" placeholder="Username"/>*/}
                        <input type="email" placeholder="Email" onChange={(e) => {
                            setemail(e.target.value);
                        }}/>
                        <input type="password" placeholder="Password" onChange={(e) => {
                            setpass(e.target.value);
                        }}/>
                    </div>
                    <Link to="/SignupPage">
                        <button id="signup-btn" onClick={signup}>Sign Up</button>
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