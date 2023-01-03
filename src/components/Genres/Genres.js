import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../redux";
import {Genre} from "../Genre/Genre";
// import css from "./Genres.module.css";


const Genres = () => {
    const dispatch = useDispatch();

    const {genres} = useSelector(state => state.movieReducer);

    useEffect(() => {
        dispatch(movieActions.getGenres())
    }, [dispatch])
    return (
        <div>
            {genres.genres?.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};