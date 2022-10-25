import React, {useEffect, useRef, useState} from 'react';
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

import css from './Header.module.css'
import {movieActions} from "../../redux";


const Header = () => {
    const [query, setQuery] = useState('')

    const dispatch = useDispatch();

    useEffect(() => {
        if(query!== ''){
            dispatch(movieActions.search({query}));
        }
    }, [dispatch, query])

    console.log(query);

    const inputSearchValue = useRef()

    const searchValue = (e) => {
        e.preventDefault();
        setQuery(inputSearchValue.current.value)
        inputSearchValue.current.value = '';
    }

    return (
        <form className={css.block}>
            <input type="text" ref={inputSearchValue} placeholder="Search your interesting... "/>
            <button  onClick={searchValue}> <Link to="/search">Search</Link></button>
        </form>
    );
};


export {Header};