import React from 'react';

const Genre = ({genre}) => {
    const {id,name} = genre;
    return (
        <div>
            {name}
        </div>
    );
};

export {Genre};