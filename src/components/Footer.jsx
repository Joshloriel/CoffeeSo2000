import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>About Us</h5>
                        <p>In the bustling streets of the city, CoffeeSo emerged as a beacon of aromatic delight. With passion brewing in every cup, CoffeeSo swiftly captured the hearts of caffeine connoisseurs far and wide.</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link style={{textDecoration: 'none', color: 'white'}} to="/">Home</Link></li>
                            <li><Link style={{textDecoration: 'none', color: 'white'}} to="/about">About Us</Link></li>
                            <li><Link style={{textDecoration: 'none', color: 'white'}} to="/branches">Branches</Link></li>
                            <li><Link style={{textDecoration: 'none', color: 'white'}} to="/menu">Menu</Link></li>
                        </ul>

                    </div>
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <p>123 Street, City, Country</p>
                        <p>Email: example@example.com</p>
                        <p>Phone: +1234567890</p>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="text-center">
                    <p>&copy; 2024 joshlorielso. All rights reserved.</p>
                </div>
            </div>
        </footer>

    )
}

export default Footer