import React, {useEffect, useRef, useState} from 'react';
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

import css from './Header.module.css'
import {movieActions} from "../../redux";
import {Genres} from "../Genres/Genres";


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
        <div>
            <div className={css.block}>
                <input type="text" ref={inputSearchValue} placeholder="Search"/>
                <button onClick={searchValue}><Link to="/search">Search</Link></button>
            </div>
            <div className={css.genres}><Genres/></div>
        </div>
    );
};


export {Header};