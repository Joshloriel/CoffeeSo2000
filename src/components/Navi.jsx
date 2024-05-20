import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase';



const Navi = ({ user }) => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    const closeNavbar = () => setIsNavCollapsed(true);

    const handleLogout = () => {
        auth.signOut()
            .then(() => {
                // Sign-out successful.
                console.log('User signed out successfully.');
            })
            .catch((error) => {
                // An error happened.
                console.error('Error signing out:', error);
            });
    };


    return (
        <nav className="navbar navbar-expand-lg bg-black-lo bg-md-dark">
            <div className="container-fluid">
                <Link className="navbar-brand text-white pacifico-regular" to="/">CoffeeSo</Link>
                <button
                    className="navbar-toggler bg-light"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded={!isNavCollapsed}
                    aria-label="Toggle navigation"
                    onClick={handleNavCollapse}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link text-white active" aria-current="page" to="/" onClick={closeNavbar}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/about" onClick={closeNavbar}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/menu" onClick={closeNavbar}>Menu</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/branches" onClick={closeNavbar}>Branches</Link>
                        </li>
                        <li className='nav-item d-block d-md-none'>
                            {user ? (
                                <button className="btn btn-light " onClick={() => { handleLogout(); closeNavbar(); }}>Logout</button>
                            ) : (
                                <Link className="btn btn-light " to="/login" onClick={closeNavbar}>Login</Link>
                            )}
                        </li>

                    </ul>
                </div>
                <span className="d-md-block d-none">
                    {user ? (
                        <button className="btn btn-light" onClick={() => { handleLogout(); closeNavbar(); }}>Logout</button>
                    ) : (
                        <Link className="btn btn-light" to="/login" onClick={closeNavbar}>Login</Link>
                    )}
                </span>
            </div>
        </nav>
    );
};

export default Navi;
