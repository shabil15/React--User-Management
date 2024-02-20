import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo:localStorage.getItem('userInfo')
  && JSON.parse(localStorage.getItem('userInfo')),

  adminInfo:localStorage.getItem('adminInfo')
  && JSON.parse(localStorage.getItem('adminInfo'))
};

const authSlice = createSlice({
  name:'auth',
  initialState,
  reducers:{
    setCredential: (state,action) => {
      state.userInfo = action.payload;
      localStorage.setItem('userInfo',JSON.stringify(action.payload));
    },
  }
})


export const {setCredential} = authSlice.actions;

export default authSlice.reducer