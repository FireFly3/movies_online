import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {movieActions} from "../../redux";
import {MovieListCard} from "../MoviesListCard/MovieListCard";

const MovieList = () => {
    const dispatch = useDispatch();

    const {movies} = useSelector(state => state.movieReducer);

    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(movieActions.getAll({page: query.get('page')}))
    },[query])

    const prev = () => {
        setQuery(value => ({page: value.get('page') - 1}))
    }

    const next = () => {
        setQuery(value => ({page: +value.get('page') + 1}))
    }

    return (
        <div>
            {movies.results?.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
            <button onClick={prev}>Prev page</button>
            <button onClick={next}>Next page</button>
        </div>
    );
};

export {MovieList};




