import React, { useState, useEffect } from 'react';
import useServices from '../../../hooks/useServices';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Service from '../Service/Service';
import './Home.css'

const Home = () => {

    const [services, setServices] = useServices()

    const seeDetail = (serv) => {
        console.log(serv);
    }



    return (
        <div className=''>
            <Banner></Banner>

            <h2 className='text-center mt-5 mb-4'>My Services</h2>

            <div className='service-container text-center '>
                {
                    services.map(service => <Service
                        service={service}
                        key={service.id}
                        seeDetail={seeDetail}
                    ></Service>)
                }
            </div>


            <Footer></Footer>
        </div>
    );
};

export default Home;