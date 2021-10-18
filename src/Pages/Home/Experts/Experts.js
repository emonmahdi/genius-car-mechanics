import React from 'react';
import mecanic1 from '../../Home/images/mechanic/m1.jpg'
import mecanic2 from '../../Home/images/mechanic/m2.jpg'
import mecanic3 from '../../Home/images/mechanic/m3.jpg'
import mecanic4 from '../../Home/images/mechanic/m4.jpg'
import Expert from '../Expert/Expert';

const experts = [
    {
        id: 1,
        img: mecanic1,
        name: 'JAWAD SHAIKH',
        experties: '-Master Mechanic-'
    },
    {
        id: 2,
        img: mecanic2,
        name: 'Praveen bhardwaj',
        experties: '-Ace Auto Works-'
    },
    {
        id: 3,
        img: mecanic3,
        name: 'Michael Goodwin',
        experties: '-Absolute Auto Repair-'
    },
    {
        id: 4,
        img: mecanic4,
        name: 'SHAHID AHMED ',
        experties: '-Van Battery Specialists-'
    }
]

const Experts = () => {
    return (
        <div id='experts'>
            <h1 className='text-danger'>Our Experts</h1>
            <div className="container mb-5">
                <div className="row">
                    {
                        experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                        ></Expert>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Experts;