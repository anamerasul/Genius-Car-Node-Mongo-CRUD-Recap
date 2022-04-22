import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const port = 3002



    const [services, setServices] = useState([]);

    useEffect(() => {

        const url = `http://localhost:${port}/service`
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    // const { id } = services._id
    // console.log(id);




    return (
        <div id="services" className='container'>
            <div className="row">
                <h1 className='text-primary text-center mt-5'> Our Services</h1>
                <div className="services-container">
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        >
                        </Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;