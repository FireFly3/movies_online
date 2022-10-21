import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movies: [],
    currentMovie: null,
    loading: false,
    error: null


};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,

    reducers: {
        setCurrentMovie: (state, actions) => {
            state.currentMovie = actions.payload
        }
    },
    extraReducers: {
        [getAll.fulfilled]: (state, actions) => {
            state.movies = actions.payload
        }
    }

});
const {reducer: movieReducer, actions: {setCurrentMovie}} = movieSlice;

const movieActions = {
    getAll,
    setCurrentMovie
}

export {
    movieActions,
    movieReducer
}