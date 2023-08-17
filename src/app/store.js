import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/search/searchSlice";
import robotsSlice from "../features/robots/robotsSlice";

export default configureStore({
    reducer: {
        search: searchReducer,
        robots: robotsSlice
    }
});