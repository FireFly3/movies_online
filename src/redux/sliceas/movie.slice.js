import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movies: [],
    currentMovie: null,
    loading: false,
    error: null,
    searchMovies:[],
    genres:[]
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

const getById = createAsyncThunk(
    'movieSlice/getById',
    async ({id},{rejectWithValue})=>{
        try {
            const {data} = await movieService.getById(id)
            return data
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const search = createAsyncThunk(
    'movieSlice/search',
    async ({query}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.search(query);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getGenres = createAsyncThunk(
    'movieSlice/genres',
    async (_,{rejectWithValue})=>{
        try {
            const {data} = await movieService.getGenres();
            return data
        }catch (e) {
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
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload
                state.loading = false
            })
            .addCase(getAll.rejected,(state,action)=>{
                state.error = action.payload
                state.loading = false
            })
            .addCase(getAll.pending, (state)=>{
                state.loading = true
            })
            .addCase(getById.fulfilled, (state, action)=>{
                state.currentMovie = action.payload
            })
            .addCase(getById.rejected,(state,action)=>{
                state.error = action.payload
                state.loading = false
            })
            .addCase(getById.pending, (state)=>{
                state.loading = true
            })
            .addCase(search.fulfilled, (state,action)=>{
                state.searchMovies = action.payload.results
                state.loading = false
            })
            .addCase(search.rejected, (state,action)=>{
                state.error = action.payload
                state.loading = false
            })
            .addCase(search.pending, (state)=>{
                state.loading = true
            })
            .addCase(getGenres.fulfilled,(state,action)=>{
                state.genres = action.payload
                state.loading = false
            })
            .addCase(getGenres.rejected,(state, action)=>{
                state.errore = action.payload
                state.loading = false
            })
            .addCase(getGenres.pending,(state)=>{
                state.loading = true
            })


});
const {reducer: movieReducer, actions: {setCurrentMovie}} = movieSlice;

const movieActions = {
    getAll,
    setCurrentMovie,
    getById,
    search,
    getGenres
}

export {
    movieActions,
    movieReducer
}