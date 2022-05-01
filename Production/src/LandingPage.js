import React from 'react'
import {Link} from "react-router-dom";
// import './App.css';

export default function LandingPage() {
    return (
        <>
            <body id='landing-body' className=''>
            <h1 id="landing-h1">Welcome to Green Pocket</h1>
            <Link to="/LoginPage">
                <button className="btn btn-success btn-tag">Log In</button>
            </Link>
            <span>-----------OR-----------</span>
            <Link to="/SignupPage">
                <button className="btn btn-success btn-tag">Sign Up</button>
            </Link>
            </body>
        </>
    )
}