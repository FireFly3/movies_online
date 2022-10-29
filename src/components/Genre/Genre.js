import React from 'react';

const Genre = ({genre}) => {
    const {name} = genre;
    return (
        <div>
            <input type="checkbox"/>{name}
        </div>
    );
};

export {Genre};