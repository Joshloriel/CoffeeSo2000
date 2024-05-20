import React from 'react';
import Bg from './../assets/cafe-background.jpg'
const About = () => {
    return (
        <div className='text-light p-4' style={{ minHeight: '83vh', backgroundImage: `url(${Bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className="container rounded p-3" style={{ backgroundColor: 'rgba(0,0,0,.8)' }}>
                <h1 className='text-center mb-5 pacifico-regular'>About CoffeeSo</h1>
                <div className="row">
                    <div className="col-md-6  animate animate__animated animate__fadeInLeftBig">
                        <h1 className="pacifico-regular mb-4">Our story</h1>
                        <p className="lead">
                            In the bustling streets of the city, CoffeeSo emerged as a beacon of aromatic delight. With passion brewing in every cup, CoffeeSo swiftly captured the hearts of caffeine connoisseurs far and wide.
                        </p>
                        <p className="lead">
                            From humble beginnings to soaring heights, its journey mirrored the rich complexity of its finest blends. Today, CoffeeSo stands tall, a testament to dedication, quality, and the enduring love for the perfect cup of coffee.
                        </p>
                    </div>
                    <div className="col-md-6  animate animate__animated animate__fadeInRightBig">
                        <div className="text-center">
                            <h2 className="pacifico-regular">Our Mission</h2>
                            <ul className='list-unstyled mt-4'>
                                <li>To deliver exceptional coffee experiences to our customers.</li>
                                <li>To foster a sense of community and connection in every interaction.</li>
                                <li>To source ethically and sustainably, prioritizing environmental and social responsibility.</li>
                            </ul>
                        </div>
                        <div className="text-center mt-5">
                            <h2 className="pacifico-regular">Our Vision</h2>
                            <ul className='list-unstyled mt-4'>
                                <li>To be the leading advocate for coffee culture and innovation.</li>
                                <li>To inspire moments of joy, creativity, and connection in every cup.</li>
                                <li>To build a global community centered around a love for exceptional coffee.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
