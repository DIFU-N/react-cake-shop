import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    numOfCAkes: 10,
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state, action) => {
            state.numOfCAkes -= action.payload
        },
        restocked: (state, action) => {
            state.numOfCAkes += action.payload
            // state.numOfCAkes += 1
        }
    }
})

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;