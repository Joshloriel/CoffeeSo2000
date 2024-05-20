import React from 'react'
import Cf from './../assets/cf.png'
import { Link } from 'react-router-dom'
import BestSellers from './Home/BestSellers';
import Contact from './Home/Contact';


const Home = () => {
    return (
        <div>
            <div className="hero">
                <div className="row">
                    <div className="col-md-6 pt-5 ps-5 mb-3">
                        <h1 className='hero-tagline text-light pacifico-regular animate animate__animated animate__fadeInLeftBig'>Start your day <br /> with a Coffee</h1>
                        <div className="scroll-wrapper">
                            <p className='scroll-container text-light mt-5 mt-md-2' style={{ fontSize: '15px' }}>Indulge in the rich aroma <br /> of freshly brewed delight</p>
                            <p className='tagline text-light' style={{ fontSize: '20px' }}>Experience the Essence of Morning Bliss</p>
                        </div>

                        <Link to="/menu" className="btn btn-light mt-3">
                            Menu
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <img src={Cf} alt="coffee ico" style={{ width: '100%' }} className=' animate animate__animated animate__fadeInRightBig' />
                    </div>
                </div>
            </div>
            <BestSellers />
            <Contact />
        </div>
    )
}

export default Home