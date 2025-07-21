import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: '',
    items: [
        'Banana',
        'Apple',
        'Orange',
        'Mango',
        'Pineapple',
        'Watermelon'
    ]
};

export const searchslice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
        },
    },
})

export const { setSearch } = searchslice.actions;

export const selectfilteredItems = (state) => {
  return state.search.items.filter(item =>
    item.toLowerCase().includes(state.search.search.toLowerCase())
  );
};

export default searchslice.reducer;