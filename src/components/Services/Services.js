import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div>
            <h2>This is Services Section:{services.length}</h2>
        </div>
    );
};

export default Services;