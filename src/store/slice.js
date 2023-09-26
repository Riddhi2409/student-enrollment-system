import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    slot: "",
    name: "",
    age: "",
}

export const slice = createSlice({
    name: "student",
    initialState,
    reducers: {
        addSlot: (state,action) => {
            state.slot = action.payload
        },
        addName: (state,action) =>{
            state.name = action.payload;
        },
        addAge: (state,action) =>{
            state.age = action.payload
        }
    }
})

export const {addSlot,addAge,addName} = slice.actions;

export default slice.reducer