import { createSlice } from '@reduxjs/toolkit';

const initialState = {

};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {

        },

        logout: () => {
            return initialState;
        },
    }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;