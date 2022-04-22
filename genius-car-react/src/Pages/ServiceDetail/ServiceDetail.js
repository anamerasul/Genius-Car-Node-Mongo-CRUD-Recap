import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {

    const port = 3002

    const { serviceId } = useParams();

    const [service, setService] = useState({})


    const url = `http://localhost:${port}/service/${serviceId}`

    useEffect(() => {

        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => { setService(data) })

    }, [])
    return (
        <div>
            <h2>Welcome to detail: {service.name}</h2>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;