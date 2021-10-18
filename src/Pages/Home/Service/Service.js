import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ( {service} ) => {
    const {id, name, img, description, price} = service;
    return (
       <div className="container">
           
            <div className='service-item mx-auto'>
                <img src={img} className='img-fluid' alt="" />
                <div className="content p-2">
                    <h3>{name}</h3>
                    <h5>{price}</h5>
                    <p>{description}</p>  
                    <Link to={`/booking/${id}`} >
                        <button className='btn btn-warning mb-3'>Book {name}</button>
                    </Link>  
                     
                </div> 
            </div>
       </div>
    );
};

export default Service;