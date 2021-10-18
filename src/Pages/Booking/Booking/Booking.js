import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {serviceId} = useParams()
    console.log(serviceId)
    return (
        <div>
            <h2>This is booking page {serviceId}</h2>
        </div>
    );
};

export default Booking;