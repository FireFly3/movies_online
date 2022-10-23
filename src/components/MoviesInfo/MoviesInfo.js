import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux";
import {MovieInfo} from "../MovieInfo/MovieInfo";
import {useParams} from "react-router-dom";

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