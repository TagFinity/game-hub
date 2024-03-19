import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features/themes/themeSlice';
import createPostReducer from './features/ui/createPostSlice';

const makeStore = () =>
    configureStore({
        reducer: {
            theme: themeReducer,
            createPost: createPostReducer,
        },
    });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export default makeStore;
