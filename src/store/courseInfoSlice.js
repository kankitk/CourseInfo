import { createSlice } from "@reduxjs/toolkit"

const initialState = {}
export const courseInfoSlice = createSlice({
    name:'courseInfo',
    initialState:initialState,
    reducers:{
        fetchData:(state,action)=>{
            return action.payload;
        }
    }
})

export const {fetchData} = courseInfoSlice.actions;
export default courseInfoSlice.reducer;