import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    movies:[],
    currentMovie:null,
    loading:false,
    error:null


};
createSlice({
    name: 'movieSlice',
    initialState,
    

})