
import { configureStore } from '@reduxjs/toolkit';
import MovieReducer from './MovieSlice';

const store = configureStore({
  
  reducer:{
    cart : MovieReducer,
  }
})

export default store;