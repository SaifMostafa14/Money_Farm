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
        <a className='linkHP' href="/budget">Budget summary</a>
        <a className='linkHP' href="/connect_bank">Spending summary</a>
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
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras massa justo, blandit vel ultricies in, condimentum at quam. Praesent vestibulum vulputate nisi eget consequat. Phasellus imperdiet, sapien vel consectetur posuere, sapien nisi eleifend arcu, vel sagittis ex tortor a ante.</p>
                                <a href="/budget" className="buttonHP">Check budget ></a>

                            </div>
                        </div>
                        <div className="cardHP">
                            <div>
                                <i></i>
                            </div>
                            <div className="infoHP">
                                <h3>Spending summary</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras massa justo, blandit vel ultricies in, condimentum at quam. Praesent vestibulum vulputate nisi eget consequat. Phasellus imperdiet, sapien vel consectetur posuere, sapien nisi eleifend arcu, vel sagittis ex tortor a ante.</p>
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
