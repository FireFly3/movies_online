import React from 'react';
import StarRatings from "react-star-ratings/build/star-ratings";
import {Link} from "react-router-dom";

import {urlImage} from "../../configs";
import css from './MoviListCard.module.css'

const MovieListCard = ({movie}) => {

    const {title, vote_average, id, poster_path} = movie;


    return (
        <div>
            <Link to={`/movie/${id}`}>
                <div className={css.block}><img className={css.poster} src={`${urlImage}${poster_path}`} alt=""/>

                    <div className={css.title}>{title}</div>
                    <StarRatings
                        rating={vote_average}
                        starRatedColor="gold"
                        numberOfStars={10}
                        name='rating'
                        starDimension='12px'
                        starSpacing='1px'
                    /></div>
            </Link>
        </div>
    );
};

export {MovieListCard};