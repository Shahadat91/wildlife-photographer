import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div>
            <h2 className='text-info text-center m-5'>This is Services Section:{services.length}</h2>

            <div className="services-container">
            {
                services?.map(service => <Service key={service.id} service={service} /> )
            }

            </div>
        </div>
    );
};

export default Services;