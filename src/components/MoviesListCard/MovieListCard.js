import React from 'react';
import StarRatings from "react-star-ratings/build/star-ratings";

const MovieListCard = ({movie}) => {
const {original_title, vote_average} = movie;



    return (
        <div>
            <div>{original_title}</div>
            <StarRatings
                rating={vote_average}
                starRatedColor="gold"
                numberOfStars={10}
                name='rating'
                starDimension='12px'
                starSpacing='1px'
            />
        </div>
    );
};

export {MovieListCard};