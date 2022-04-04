import React from 'react'
import {Link} from "react-router-dom";

export default function LandingPage() {
    return (
        <>
        <body className='body'>
            <h1>Hello</h1>
            <Link to="/LoginPage">
                <button id="loginbtn">Log In</button>
            </Link>
            <Link to="/SignupPage">
                <button id="signup-btn">Sign Up</button>
            </Link>
        </body>
        </>
    )
}