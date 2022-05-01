import React from 'react'
import './homepage.css'
import {Container, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function HomePage() {
    return (
        <>
       <body>
    
    <header className="head" >
     <nav className="navigation">
         {/*<link rel="stylesheet" href=""/>*/}
        <a href="/budget">Budget summary</a>
        <a href="/connect_bank">Spending summary</a>
     </nav>
    </header>
    {/*<Navbar bg="dark" variant="dark" className='nav justify-content-center'>*/}
    {/*    <Container className=''>*/}
    {/*        <Navbar.Brand>GreenPocket</Navbar.Brand>*/}
    {/*        <Link className=" nav nav-pills nav-fill nav-link" to="/budget">Budget</Link>*/}
    {/*        <Link className="nav nav-pills nav-fill nav-link" to="/connect_bank">Conect Bank</Link>*/}
    {/*        <Link className="nav nav-pills nav-fill nav-link" to="/SpendingPage">Spending</Link>*/}
    {/*    </Container>*/}
    {/*</Navbar>*/}

    <section className="main">
        <aside>
            <h2>Welcome To GREEN POCKET</h2>
        </aside>
    </section>
</body>  
        </>
    )
}