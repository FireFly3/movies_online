import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {movieActions} from "../../redux";
import {MovieListCard} from "../MoviesListCard/MovieListCard";
import css from './MovieList.module.css'

const MovieList = () => {
    const dispatch = useDispatch();

    const {movies, loading, error} = useSelector(state => state.movieReducer);

    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(movieActions.getAll({page: query.get('page')}))
    }, [query, dispatch])

    const prev = () => {
        setQuery(value => ({page: value.get('page') - 1}))
    }

    const next = () => {
        setQuery(value => ({page: +value.get('page') + 1}))
    }

    return (
        <div>
            <div className={css.button}>
                <button disabled={query.get('page') === '1'} onClick={prev}>Prev page</button>
                <button disabled={query.get('page') === '500'} onClick={next}>Next page</button>
            </div>
            <div className={css.button}>
                {loading && <div>Loading-------------</div>}
            </div>
            <div className={css.flex}>
                {error && JSON.stringify(error)}
                {movies.results?.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export {MovieList};

