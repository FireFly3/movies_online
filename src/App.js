import {Routes, Route} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MovieList, MoviesInfo} from "./components";

function App() {
    return (

        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'getMovies'} element={<MovieList/>}/>
                <Route path={'/movie/:id'} element={<MoviesInfo/>}/>
            </Route>
        </Routes>
    );
}

export default App;
