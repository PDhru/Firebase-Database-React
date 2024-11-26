import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../features/post/postSlice.jsx';
const store = configureStore({
    reducer: {
        post: postReducer
    }
})
export default store;