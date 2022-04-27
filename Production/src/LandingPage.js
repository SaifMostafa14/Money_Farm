import React from 'react'
import {Link} from "react-router-dom";
// import './App.css';

export default function LandingPage() {
    return (
        <>
        <body id='landing-body' className='box-all landing-tagy'>
            <h1 id="landing-h1">Hello</h1>
            <Link to="/LoginPage">
                <button className="button-tag">Log In</button>
            </Link>
            <Link to="/SignupPage">
                <button className="button-tag">Sign Up</button>
            </Link>
        </body>
        </>
    )
}