import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo:
    localStorage.getItem("userInfo") &&
    JSON.parse(localStorage.getItem("userInfo")),

  adminInfo:
    localStorage.getItem("adminInfo") &&
    JSON.parse(localStorage.getItem("adminInfo")),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredential: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },

    logOut: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },

    setAdminCredentials: (state, action) => {
      state.adminInfo = action.payload;
      localStorage.setItem("adminInfo", JSON.stringify(action.payload));
    },

    adminlogout: (state) => {
      state.adminInfo = null;
      localStorage.removeItem("adminInfo");
    },
  },
});

export const { setCredential, logOut, setAdminCredentials, adminlogout } =
  authSlice.actions;

export default authSlice.reducer;
