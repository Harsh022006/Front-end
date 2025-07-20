import { configureStore } from "@reduxjs/toolkit";
import  countSlice  from "../data/Counter/countSlice";
import todoSlice from "../data/Todolist/todoSlice";

export const store = configureStore({
    reducer :{
        counter : countSlice,
        todo : todoSlice
    }
})