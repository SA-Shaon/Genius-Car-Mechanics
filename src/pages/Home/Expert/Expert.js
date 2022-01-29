import React from 'react';
import './Expert.css';

const Expert = (props) => {
    const { img, name, expertize } = props.expert;
    return (
        <div className='expert col-lg-4 col-12 m-2'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5 className='text-danger'>{expertize}</h5>
        </div>
    );
};

export default Expert;