import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterslice';
export default configureStore({
    reducer : {
        counterReducer
    }
})