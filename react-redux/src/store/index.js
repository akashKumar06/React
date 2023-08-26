// import { createStore } from "redux";
import {configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import counterReducer from "./counter";

/* 
    while returning the object we return a brand new state object snapshot, which redux uses to replace with existing state. will not be merged with existing state that will overwrite the existing state.

    why do we need to return the new piece of data?
    why can't we just use the state and update the respective values?

    Never change the original state or mutate the original state.

    always return the brand new state.

    ---------------------------------------------------------
    Redux Toolkit

    - on installing redux toolkit redux will bw installed automatically.
    - createSlice() => with createSlice we create a slice of global state.
    - every slice requires a name
    - when using redux toolkit, which allows to mutate the original state.
    - configureStore() => same as createStore. 
*/



// when working with multiple slices, there must be only one configureStore

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
