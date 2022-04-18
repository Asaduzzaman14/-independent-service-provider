import React from 'react';
import { useParams } from 'react-router-dom';
import './CheckOut.css'


const CheckOut = () => {
    const { id } = useParams()



    return (
        <div className='text-center'>
            <h2 className='text-center my-4'>Welcome to Checkout page</h2>
            <form className='Checkout-from'>
                <input type="text" name='name' placeholder='Your name' />
                <br />
                <br />
                <input type="email" name='email' placeholder='Your email' />
                <br />
                <br />
                <input type="text" name='address' placeholder='Your address' />
                <br />
                <br />
                <button className='book-now-btn'>Book Now</button>
            </form>
        </div>
    );
};

export default CheckOut;