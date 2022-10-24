import React, {useEffect} from 'react';

import css from './Header.module.css'
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {movieActions} from "../../redux";
import {useForm} from "react-hook-form";

const Header = () => {

    const {register, handleSubmit} = useForm();

    const dispatch = useDispatch();

    const {searchMovies} = useSelector(state => state.movieReducer);

    const {query} = useParams();

    useEffect(()=>{
        dispatch(movieActions.search({page: query.get('query')}))
    },[searchMovies,query,dispatch])


    const submit = ()=> {

    };
    return (
        <form className={css.block} onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'searching film'} {...register}/>
            <button>Search</button>
        </form>
    );
};



export {Header};