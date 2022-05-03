import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import todosSlice from "./productSlicer";

export const store = configureStore({
    reducer: {
        todos:todosSlice
    },
    middleware:[thunk]
})