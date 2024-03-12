import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features/themes/themeSlice';

const makeStore = () =>
    configureStore({
        reducer: {
            theme: themeReducer,
        },
    });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export default makeStore;
