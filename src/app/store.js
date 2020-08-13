import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import photoReducer from 'features/Photo/photoSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,

    photos: photoReducer,
  },
});
