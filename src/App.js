// import {Header} from "./components";
// import {MovieList} from "./components";


import {Routes, Route} from "react-router-dom";
import {MainLayout} from "./layouts";
import {MovieList} from "./components";

function App() {
    return (
        // <div >
        //   <Header/>
        //     <div>
        //         <MovieList/>
        //     </div>
        //
        // </div>
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'getMovies'} element={<MovieList/>}/>
            </Route>
        </Routes>
    );
}

export default App;
