import React from 'react';
import {urlImage} from "../../configs";

import css from './MoviesInfo.module.css'
import StarRatings from "react-star-ratings/build/star-ratings";

const MovieInfo = ({movie}) => {
    console.log(movie);
    const {backdrop_path, homepage, original_title, overview, poster_path, title, vote_average} = movie;
    return (
        <div>
            <div className={css.title}>{title}</div>
            <div className={css.block}>
                <img className={css.backdrop} src={`${urlImage}${poster_path}`} alt=""/>
                <div className={css.overview}>
                    <div className={css.overview}>{overview}</div>
                    <div> <StarRatings
                        rating={vote_average}
                        starRatedColor="gold"
                        numberOfStars={10}
                        name='rating'
                        starDimension='12px'
                        starSpacing='1px'
                    /></div>
                </div>
            </div>
        </div>
    );
};

export {MovieInfo};