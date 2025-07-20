import { configureStore } from "@reduxjs/toolkit";
import  adminSlice  from "../Slicedata/adminSlice";

export const store = configureStore({
    reducer :{
        admins : adminSlice
    }
})