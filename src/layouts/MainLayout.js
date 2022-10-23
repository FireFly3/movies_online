import React from 'react';
import {Header, MovieList} from "../components";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <MovieList/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};