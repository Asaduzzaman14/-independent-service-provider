import React from 'react';
import './Footer.css'

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <div className='mt-5 text-center footer'>
            <p>&copy; All Right Reserver Authorige {year}</p>
        </div>
    );
};

export default Footer;