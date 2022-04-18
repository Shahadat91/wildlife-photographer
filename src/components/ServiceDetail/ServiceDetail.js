import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    console.log(serviceId)
    return (
        <div style={{marginTop: "100px"}}>
            <h2 className='text-center'>Thanks for choosing this service</h2>
            <div className="text-center">
                <Link to="/checkout">
                <button className='btn btn-primary'>Proceed Checkout</button>
            </Link>
            </div>
            
        </div>
    );
};

export default ServiceDetail;
