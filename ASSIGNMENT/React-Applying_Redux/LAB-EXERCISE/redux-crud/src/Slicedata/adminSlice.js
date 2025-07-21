import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const showadmin = createAsyncThunk(
    'showuadmin', async (argu, { rejectWithValue }) => {
        try {

            const res = await axios.get("http://localhost:3000/admin")
            const result = await res.data
            return result

        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

// new data
export const creatadmin = createAsyncThunk(
    'creatadmin', async (data, { rejectWithValue }) => {
        try {

            const res = await axios.post("http://localhost:3000/admin", data)
            const result = await res.data
            return result

        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const deleteadmin = createAsyncThunk(
    'deleteadmin', async (id, { rejectWithValue }) => {
        try {
            const res = await axios.delete(`http://localhost:3000/admin/${id}`)
            const result = await res.data
            return result
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const updateadmin = createAsyncThunk(
    'updateadmin', async (data, { rejectWithValue }) => {
        try {

            const res = await axios.put(`http://localhost:3000/admin/${data.id}`, data)
            const result = await res.data
            return result

        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const adminSlice = createSlice({
    name: "adminDetails",
    initialState: {
        admin: [],
        loading : false,
        error: ""
    },
    reducers: {
        adminPending: (state) => {
            state.loading = true;
        },
        adminFullfiled: (state, action) => {
            state.loading = false;
                state.admin.push(action.payload)
        },
        adminReject: (state, action) => {
            state.loading = false;
                state.error = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            // read data
            .addCase(showadmin.pending, (state) => {
                state.loading = true
            })
            .addCase(showadmin.fulfilled, (state, action) => {
                state.loading = false;
                state.admin = action.payload
            })
            .addCase(showadmin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
            // new data
            .addCase(creatadmin.pending, (state) => {
                state.loading = true
            })
            .addCase(creatadmin.fulfilled, (state, action) => {
                state.loading = false;
                state.admin.push(action.payload)
            })
            .addCase(creatadmin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })

            // delete

            .addCase(deleteadmin.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteadmin.fulfilled, (state, action) => {
                state.loading = false;
                state.admin = state.admin.filter((data, index) => index !== action.payload)
            })
            .addCase(deleteadmin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
            // update

            .addCase(updateadmin.pending, (state) => {
                state.loading = true
            })
            .addCase(updateadmin.fulfilled, (state, action) => {
                state.loading = false;
            

                state.admin = state.admin.map((ele)=>
            
                ele.id === action.payload.id ? action.payload : ele

            );
            })
            .addCase(updateadmin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
    }
})

export const { adminPending, adminFullfiled, adminReject } = adminSlice.actions;

export default adminSlice.reducer;