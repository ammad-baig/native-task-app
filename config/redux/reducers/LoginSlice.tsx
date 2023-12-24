import { createSlice } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
    name: 'login',
    initialState: {
        auth: false,
        loginData: {}
    },
    reducers: {
        add: (state, action) => {
            state.auth = true;
            state.loginData = action.payload;
        }
    }
})

export const { add } = LoginSlice.actions
export default LoginSlice.reducer