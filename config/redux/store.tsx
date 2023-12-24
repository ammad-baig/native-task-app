import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./reducers/LoginSlice";

const store = configureStore({
    reducer: {
        login: LoginSlice,
    }
})

export default store