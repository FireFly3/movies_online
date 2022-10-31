import React from 'react';
import {useSelector} from "react-redux";

import {MovieListCard} from "../components";
import css from './SearchMovie.module.css'

const SearchMoviesPage = () => {

    const {searchMovies} = useSelector(state => state.movieReducer);

    console.log(searchMovies);

    return (
        <div className={css.flex}>
            {searchMovies?.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {SearchMoviesPage};