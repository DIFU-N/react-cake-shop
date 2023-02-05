const createSlice = require('@reduxjs/toolkit').createSlice;

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
        }
    }
})

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;