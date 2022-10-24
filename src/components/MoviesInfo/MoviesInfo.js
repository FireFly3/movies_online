import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import {movieActions} from "../../redux";
import {MovieInfo} from "../MovieInfo/MovieInfo";

const MoviesInfo = () => {
    const dispatch = useDispatch();

    const {currentMovie} = useSelector(state => state.movieReducer);

    const {id} = useParams();

    useEffect(() => {
        dispatch(movieActions.getById({id}))
    }, [id, dispatch])
    return (
        <div>
            {currentMovie&&(<MovieInfo movie={currentMovie} key={currentMovie.id}/>)}
        </div>
    );
};

export {MoviesInfo};