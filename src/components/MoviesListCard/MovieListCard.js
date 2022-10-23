import React from 'react';
import StarRatings from "react-star-ratings/build/star-ratings";
import {Link} from "react-router-dom";

const MovieListCard = ({movie}) => {
    // console.log(movie);
    const {original_title, vote_average} = movie;



    return (
        <div>
            <Link to={movie.id.toString()}>

                <div>{original_title}</div>
                <StarRatings
                    rating={vote_average}
                    starRatedColor="gold"
                    numberOfStars={10}
                    name='rating'
                    starDimension='12px'
                    starSpacing='1px'
                /></Link>
        </div>
    );
};

export {MovieListCard};