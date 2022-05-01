import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import axios from 'axios';
import './App.css';

export default function SignupPage({Login, error}) {
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");

    const signup = () => {
        console.log(firstname)
        axios.post('/SignupPage', {
            firstname: firstname,
            lastname: lastname,
            email: email,
            pass: pass,
        }).then((response) => {
        });
    };

    return (<>
        <body className="signup-body box-all">,
        <div className="container signup-container" id="container">
            <div className="form-container log-in-container">
                {/*<form action="#" onSubmit={(e) => {*/}
                {/*    e.preventDefault();*/}
                {/*    axios.post("http://localhost:3000/SignupPage")*/}
                {/*}}>*/}
                <form className="form-tag" action="#" method='post'>
                    <h1 id="Signup-h1">SignUp</h1>
                    <div className="input-field">
                        <input className="input-tag" type="text" placeholder="First name" onChange={(e) => {
                            setfirstname(e.target.value);
                        }}/>
                        <input className='input-tag' type="text" placeholder="Last name" onChange={(e) => {
                            setlastname(e.target.value);
                        }}/>
                        {/*<input type="text" placeholder="Username"/>*/}
                        <input className='input-tag' type="email" placeholder="Email" onChange={(e) => {
                            setemail(e.target.value);
                        }}/>
                        <input className='input-tag' type="password" placeholder="Password" onChange={(e) => {
                            setpass(e.target.value);
                        }}/>
                    </div>
                    <Link to="/HomePage">
                        <button className="button-tag" id="signup-btn" onClick={signup}>Sign Up</button>
                    </Link>
                </form>
            </div>

            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-right">
                        <div
                            className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                            <div className="text w-100">
                                <h2 className='h2-tag'>Welcome to GreenPocket</h2>
                                <p id="p-signup">Already have an account?</p>
                                <Link to="/LoginPage">
                                    <button className="button-tag" id="btn-signup">Log in</button>
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