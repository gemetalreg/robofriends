import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        searchfield: ""
    },
    reducers: {
        setsearchfield: (state, action) => {
            state.searchfield = action.payload;
        }
    }
})
export const selectSearchField = state => state.search.searchfield;
export const {setsearchfield} = searchSlice.actions;
export default searchSlice.reducer;

