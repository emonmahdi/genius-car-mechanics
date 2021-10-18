import React from 'react';
import './Expert.css'


const Expert = ({expert}) => {
    const {img, name, experties} = expert;
    console.log(expert)
    return (
        <div className="col-lg-3 my-4">
            <div className='bg-secondary'>
                <img src={img} className='img-fluid exper-img' alt="" />
                <h2 className='p-3 text-light'>{name}</h2>
                <h6 className='p-3 text-light'>{experties}</h6>
            </div>
        </div>
    );
};

export default Expert;