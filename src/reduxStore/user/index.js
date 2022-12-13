import { auth } from "config/fbConfig";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  loading: false,
  userLinks: {},
  userId: JSON.parse(localStorage.getItem("userId")),
  error: null,
  isLogged: JSON.parse(localStorage.getItem("userId")) ? true : false,
};

export const userLogin = createAsyncThunk("user/login", async () => {
  await auth;
  window.localStorage.setItem("userId", JSON.stringify(auth.currentUser.uid));
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
      state.isLogged = false;
      state.userId = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userId = localStorage.getItem("userId");
      state.isLogged = true;
      //   state.userLinks = getDataFromFirebase();
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isLogged = false;
      state.err = payload;
      state.userId = null;
    },
  },
});

export default userSlice.reducer;
