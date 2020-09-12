import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './slices/uiSlice';
import eventsReducer from './slices/eventsSlice';

const store = configureStore({
    reducer: {
        ui: uiReducer,
        events: eventsReducer,
    }
})

export default store;