import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('https://genius-car-server-seven-mauve.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center'> 
                <p className="text-2xl font-bold text-orange-500">Services</p>
                <h1 className="text-5xl font-semibold ">
                    Our Service Area
                </h1>
                <p className="py-6 w-1/2 mx-auto">
                    There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don't look even slightly
                    believable.
                </p>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2  lg:grid-cols-3'>
                    {
                        services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                        ></ServiceCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;