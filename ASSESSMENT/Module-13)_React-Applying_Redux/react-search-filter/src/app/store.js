import { configureStore } from "@reduxjs/toolkit";
import  searchslice  from "../data/Search/searchSlice";

export const store = configureStore({
    reducer : {
        search : searchslice
    }
})