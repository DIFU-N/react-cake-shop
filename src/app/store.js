import { configureStore } from "@reduxjs/toolkit";
import { cakeReducer } from "../features/cake/cake-slice";
import { iceCreamReducer } from "../features/ice cream/icecream-slice";
import { userReducer } from "../features/user/user-slice";
// const reduxLogger = require('redux-logger');
// const { getDefaultMiddleware } = require('@reduxjs/toolkit');


// const logger = reduxLogger.createLogger();

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer, 
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;