import React from 'react';

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <div className='mt-5 text-center'>
            <h3>&copy; All Right Reserver Authorige {year}</h3>
        </div>
    );
};

export default Footer;