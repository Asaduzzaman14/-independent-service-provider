import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service, seeDetail }) => {
    const { img, name, desc, price, } = service
    return (
        <div className='card mx-auto'>
            <div className='card-img'>
                <img src={img} alt="" />
            </div>
            <h6>{name}</h6>
            <p>{desc}</p>
            <h4>${price}</h4>
            <Link to={`/services/${service.id}`} onClick={() => seeDetail(service)}><button>Check Out</button> </Link>

        </div>
    );
};

export default Service;