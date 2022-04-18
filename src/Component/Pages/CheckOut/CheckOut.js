import React from 'react';
import { useParams } from 'react-router-dom';
import useServices from '../../../hooks/useServices';

const CheckOut = () => {
    const { id } = useParams()

    const [services] = useServices()




    return (
        <div>
            <h2 className='text-center my-4'>Welcome to Checkout page</h2>
        </div>
    );
};

export default CheckOut;