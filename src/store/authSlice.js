import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status : false,
    userData : null,
    userInfo: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers : {
        login : (state, action) => {
            state.status = true;
            state.userData = action.payload.userData
        },
        logout: (state)=>{
            state.status = false;
            state.userData = null;
        },
        saveUserInfo : (state, action)=>{
            console.log("Redux Userinfo ::",action)

            state.userInfo = action.payload
        }
    }
})

export const {login, logout, saveUserInfo} = authSlice.actions

export default authSlice.reducer;