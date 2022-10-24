import {Routes, Route, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviesPage} from "./pages/MoviesPage";
import {MoviesInfoPage} from "./pages/MoviesInfoPage";

function App() {
    return (

        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'getMovies'}/>}/>
                <Route path={'getMovies'} element={<MoviesPage/>}/>
                <Route path={'movie/:id'} element={<MoviesInfoPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
