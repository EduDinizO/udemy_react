import React from 'react';

const buildControl = props => (
    <div className='build-control'>
        <div className='build-control__label'>
            {props.label}
        </div>
        <button className='build-control__less'>
            Less
        </button>
        <button className='build-control__more'>
            More
        </button>
    </div>
);

export default buildControl;