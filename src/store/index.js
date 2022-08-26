import { configureStore } from '@reduxjs/toolkit';
import courseInfoReducer from './courseInfoSlice';

export default configureStore({
    reducer:{
        courseInfo:courseInfoReducer
    }
})