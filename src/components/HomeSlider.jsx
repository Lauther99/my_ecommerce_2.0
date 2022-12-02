import React from 'react';
import { useSelector } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import '../assets/styles/homeSlider.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeSlider = () => {
    const products = useSelector(state => state.products);

    return (
        <div className='slider'>
            <Carousel className='carousel-container'>
                {
                    products.map(product => (
                        <Carousel.Item key={Math.random()}>
                            <img
                                className="slider-item"
                                src={product.productImgs[0]}
                                />
                        </Carousel.Item>
                    ))
                }

            </Carousel>
                <h1>The best products for you</h1>
        </div>
    );
};

export default HomeSlider;