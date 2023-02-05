const configureStore = require('@reduxjs/toolkit').configureStore;
const cakeReducer = require('../features/cake/cake-slice');
const iceCreamReducer = require('../features/ice cream/icecream-slice');
// const reduxLogger = require('redux-logger');
// const { getDefaultMiddleware } = require('@reduxjs/toolkit');
const userReducer = require('../features/user/user-slice');

// const logger = reduxLogger.createLogger();

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer, 
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

module.exports = store;