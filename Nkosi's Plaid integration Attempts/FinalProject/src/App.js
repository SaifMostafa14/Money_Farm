import React, {useState} from 'react'
import './App.css';
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'
import LandingPage from "./LandingPage";
import SpendingPage from "./SpendingPage";
import PlaidApp from "./PlaidApp"
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";


function App() {
    // const adminUser = {
    //     email: "admin@gmail.com",
    //     password: "admin123"
    // }
    // // eslint-disable-next-line react-hooks/rules-of-hooks
    // const [user, setUser] = useState({name: "", email: ""});
    // // eslint-disable-next-line react-hooks/rules-of-hooks
    // const [error, setError] = useState("");
    //
    // const Login = details => {
    //     console.log(details)
    // }
    //
    // const logout = () => {
    //     console.log("Logout")
    // }

    return (
        // <div className="App">
        //     {(user.email !== "") ? (
        //         <div className="welcome">
        //             <h2>Welcome, <span>{user.name}</span></h2>
        //             <button>Logout</button>
        //         </div>
        //     ) : (
        //         <LoginPage Login={Login} error={error} />
        //     )}
        // </div>
        // <LoginPage/>

        <BrowserRouter>
            <LandingPage/>
            <Routes>
                <Route exact path="/LoginPage" element={<LoginPage/>}/>
                <Route exact path="/SignupPage" element={<SignupPage/>}/>
                <Route exact path="/SpendingPage" element={<SpendingPage/>}/>
                <Route exact path="/PlaidApp" element={<PlaidApp/>}/>
            </Routes>
        </BrowserRouter>

    )
}

export default App;
