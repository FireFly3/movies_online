import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux";
import {Genre} from "../Genre/Genre";

const Genres = () => {
    const dispatch = useDispatch();

    const {genres} = useSelector(state => state.movieReducer);

    console.log(genres);

    useEffect(() => {
        dispatch(movieActions.getGaneres())
    }, [dispatch])
    return (
        <div>
            {genres.results?.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};