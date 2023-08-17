import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRobots = createAsyncThunk("robots/fetchRobots", async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json()
    return data;
})

const initialState = {
    robots: [],
    error: null,
    status: "idle"
}

const robotsSlice =  createSlice({
    name: "robots",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchRobots.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchRobots.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.robots = action.payload;
            })
            .addCase(fetchRobots.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
})

export const selectRobotsStatus = (state => state.robots.status);
export const selectAllRobots = (state => state.robots.robots);
export default robotsSlice.reducer;