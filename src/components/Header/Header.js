import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import css from './Header.module.css'
import {movieActions} from "../../redux";
import {SearchMoviesPage} from "../../pages/SearchMoviesPage";

const Header = () => {
    const dispatch = useDispatch();

    const {searchMovies} = useSelector(state => state.movieReducer);

    const {query} = useParams();

    useEffect(() => {
        dispatch(movieActions.search({query}))
    }, [searchMovies, query, dispatch])


    const submit = () => {
        const val = document.getElementById("input").value;
        return val
    };
    return (
        <form className={css.block} onSubmit={submit}>
            <input id="input" type="text" placeholder={'searching film'}/>
            <button>Search</button>
            {searchMovies.results?.map(movie => <SearchMoviesPage key={movie.id} movie={movie}/>)}
        </form>
    );
};


export {Header};