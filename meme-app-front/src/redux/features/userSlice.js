import {
    createSlice
} from "@reduxjs/toolkit"
import React from 'react'

const initialState = null;
export const userSlice=createSlice({
    name: "user",
    initialState: {
        user:initialState,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;

        },
        logout: (state) => {
            state.user = initialState;
        }
    }
  
})

export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer