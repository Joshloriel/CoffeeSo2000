import React from 'react';
import coffeeProductsData from '../../data/coffeeProductsData';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BestSellers = () => {
    const featuredProducts = coffeeProductsData;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="w-full pt-4 bg-light" style={{ minHeight: '60vh' }}>
            <center><h1 className="pacifico-regular">CoffeeSo Featured Products</h1></center>
            <div className="container rounded p-3">
                <Slider {...settings}>
                    {featuredProducts.map((product, index) => (
                        <div key={index}>
                            <div className="card border-0 hoverable-translate-1 p-2" style={{ cursor: 'default', width: '21rem', height: '27rem' }}>
                                {product.imageUrl}
                                <div className="card-body">
                                    <div className="card-title d-flex  justify-content-between">
                                        <span className='fw-bold'>{product.name}</span> <span>₱{product.price}</span>
                                    </div>
                                    <div className="card-text">
                                        {product.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default BestSellers;
