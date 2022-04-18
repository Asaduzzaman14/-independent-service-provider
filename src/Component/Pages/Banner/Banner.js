import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../images/istockphoto-884708376-612x612.jpg'
import banner2 from '../../images/istockphoto-884708376-612x612.jpg'
import banner3 from '../../images/istockphoto-884708376-612x612.jpg'
import './Banner.css'

const Banner = () => {



    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Dental Care</h3>
                    <p>Specially designed for patients seeking dentistry abroad, we offer you bespoke expertise at a price that is unbelievably affordable. We have an elite team of carefully selected specialists from all fields of dentistry.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Dental Care</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Dental Care</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}




export default Banner;