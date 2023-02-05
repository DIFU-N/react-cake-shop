const { cakeActions } = require('../cake/cake-slice');

const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
    numOfIceCreams: 30,
}

const iceCreamSlice = createSlice({
    name: 'ice cream',
    initialState,
    reducers: {
        ordered: (state, action) => {
            state.numOfIceCreams -= action.payload
        },
        restocked: (state, action) => {
            state.numOfIceCreams += action.payload
        }
    },
    // trying to affect this state when another action happens
    // basically: when a customer buys a cake, they get 1 ice cream for free.
    // extraReducers: {
    //     ['cake/ordered']: (state, action) => {
    //         state.numOfIceCreams -= action.payload
    //     } 
    // }
    //using a build function
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, (state, action) => {
            state.numOfIceCreams -= action.payload
        })
    }
})

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;