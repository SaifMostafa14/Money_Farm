import React from 'react'
import './homepage.css'
import {Container, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function HomePage() {
    return (
        <>
            <body>

            <header className='headerHP' >
     <nav className='navigationHP'>
         {/*<link rel="stylesheet" href=""/>*/}
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

                <section className='mainHP'>
                    <aside>
                        <h2>Welcome To GREEN POCKET</h2>
                    </aside>
                </section>

                <section className="cardsHP">
                    <h2 className="titleHP">Services</h2>
                    <div className="contentHP">
                        <div className="cardHP">
                            <div>
                                <i></i>
                            </div>
                            <div className="infoHP">
                                <h3>Budget summary</h3>
                                <p>The Budget Summary includes budgeted amounts, encumbrances, transaction totals, and budget balances.</p>
                                <a href="/budget" className="buttonHP">Check budget ></a>

                            </div>
                        </div>
                        <div className="cardHP">
                            <div>
                                <i></i>
                            </div>
                            <div className="infoHP">
                                <h3>Spending summary</h3>
                                <p>The Spending Summary shows the amount of money spent and remaining for authorized services.</p>
                                <a href="/connect_bank" className="buttonHP">Check spending ></a>

                            </div>
                        </div>
                    </div>
                </section>

                <footer className="footerHP">
                    <p>Copyrights @ GREEN POCKET</p>
                </footer>

            </body>
        </>
    )
}
