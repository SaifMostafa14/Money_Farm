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
                        <a className='linkHP' href="https://www.google.com/">Budget summary</a>
                        <a className='linkHP' href="https://www.google.com/">Spending summary</a>
                    </nav>
                </header>

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
                                <a href="https://google.com" className="buttonHP">Check budget ></a>

                            </div>
                        </div>
                        <div className="cardHP">
                            <div>
                                <i></i>
                            </div>
                            <div className="infoHP">
                                <h3>Spending summary</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras massa justo, blandit vel ultricies in, condimentum at quam. Praesent vestibulum vulputate nisi eget consequat. Phasellus imperdiet, sapien vel consectetur posuere, sapien nisi eleifend arcu, vel sagittis ex tortor a ante.</p>
                                <a href="https://google.com" className="buttonHP">Check spending ></a>

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
