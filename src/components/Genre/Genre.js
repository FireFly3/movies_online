import React from 'react';

const Genre = ({genre}) => {
    const {name, id} = genre;
    let takeId = () => {
        console.log(id)
    }
    return (
        <div>

            <div onClick={takeId}>{name}</div>

        </div>
    );
};

export {Genre};