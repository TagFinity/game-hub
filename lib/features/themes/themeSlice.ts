import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
    darkMode: boolean;
}

const initialState: ThemeState = {
    darkMode: false,
};


const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme(state) {
            state.darkMode = !state.darkMode;
            state.darkMode ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', state.darkMode ? 'dark' : 'light');
        },
        setDarkMode(state) {
            state.darkMode = true;
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        },
        setLightMode(state) {
            state.darkMode = false;
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        },
    },
});

export const { toggleTheme, setDarkMode, setLightMode } = themeSlice.actions;

export default themeSlice.reducer;

export const initializeTheme = () => {
    return (dispatch: Function) => {
        const checkmode = localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia("(prefers-color-scheme: dark)").matches);
        if (checkmode) {
            dispatch(setDarkMode());
        } else {
            dispatch(setLightMode());
        }
    };
};
