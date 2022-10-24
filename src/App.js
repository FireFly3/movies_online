import {Routes, Route, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviesPage} from "./pages/MoviesPage";
import {MoviesInfoPage} from "./pages/MoviesInfoPage";
import {SearchMoviesPage} from "./pages/SearchMoviesPage";

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
