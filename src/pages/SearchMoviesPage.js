import React from 'react';
import {MovieListCard} from "../components";
import {useSelector} from "react-redux";

const SearchMoviesPage = () => {

    const {searchMovies} = useSelector(state => state.movieReducer);

    console.log(searchMovies);

    return (
        <div>
            {searchMovies?.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {SearchMoviesPage};