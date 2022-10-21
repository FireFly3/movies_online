import React from 'react';

const MovieListCard = ({movie}) => {
const {original_title} = movie;
    return (
        <div>
            <div>{original_title}</div>
            
        </div>
    );
};

export {MovieListCard};