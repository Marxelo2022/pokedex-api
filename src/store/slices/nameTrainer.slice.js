import { createSlice } from "@reduxjs/toolkit";

export const NametrainerSlice = createSlice({
    name: 'NameTrainer',
    initialState: '' ,
    reducers: {
        setNameGlobal:(state, action) => action.payload
    }
})

export const { setNameGlobal } = NametrainerSlice.actions;
export default NametrainerSlice.reducer;