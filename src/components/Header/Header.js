import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useForm} from "react-hook-form";

import css from './Header.module.css'
import {movieActions} from "../../redux";

const Header = () => {

    const {register, handleSubmit} = useForm();

    const dispatch = useDispatch();

    const {searchMovies} = useSelector(state => state.movieReducer);

    const {query} = useParams();

    useEffect(()=>{
        dispatch(movieActions.search({query}))
    },[searchMovies,query,dispatch])


    const submit = ()=> {
return query
    };
    return (
        <form className={css.block} onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'searching film'} {...register}/>
            <button>Search</button>
        </form>
    );
};



export {Header};