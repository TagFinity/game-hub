import { createSlice } from "@reduxjs/toolkit";

interface CreatePostState {
    postMode: boolean;
}

const initialState: CreatePostState = {
    postMode: false,
}

const createPostSlice = createSlice({
    name: 'createpost',
    initialState,
    reducers: {
        toggleButton(state) {
            state.postMode = !state.postMode;
        }
    },

});

export const { toggleButton } = createPostSlice.actions;

export default createPostSlice.reducer;