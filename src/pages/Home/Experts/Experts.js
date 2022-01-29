import React, { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';

const Experts = () => {
    const [experts, setExperts] = useState([]);
    useEffect(() => {
        fetch('experts.JSON')
            .then(res => res.json())
            .then(data => setExperts(data))
    }, [])
    return (
        <div className='row justify-content-evenly'>
            <h2 className='text-primary'>Our Experts</h2>
            {experts.map(expert => <Expert key={expert.name} expert={expert}></Expert>)}
        </div>
    );
};

export default Experts;