import React from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../components";
import {Genres} from "../components/Genres/Genres";
import css from './MainLayout.module.css'

const MainLayout = () => {
    return (
        <div>
            <div className={css.header}><Header/></div>
            <div className={css.block}>
                <div className={css.genres}><Genres/></div>
                <div className={css.films}><Outlet/></div>
            </div>
        </div>
    );
};

export {MainLayout};