import React, {useState} from 'react'
import './App.css';
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'


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

        <LoginPage/>
        // <SignupPage/>
    )
}

export default App;


