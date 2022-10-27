import {Routes, Route, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviesInfoPage, MoviesPage, SearchMoviesPage} from "./pages";


function App() {
    return (

        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'getMovies'}/>}/>
                <Route path={'getMovies'} element={<MoviesPage/>}/>
                <Route path={'movie/:id'} element={<MoviesInfoPage/>}/>
                <Route path={'search'} element={<SearchMoviesPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
