import { collection, getDocs, query, where } from "@firebase/firestore";
import { setDataFirebase } from "config/auth";
import { auth, db } from "config/fbConfig";
import { store } from "reduxStore";
// import { getDataFromFirebase } from "reduxStore/links";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  loginLoading: false,
  getLoading: false,
  userLinks: [],
  userId: JSON.parse(localStorage.getItem("userId")),
  error: null,
  isLogged: JSON.parse(localStorage.getItem("userId")) ? true : false,
};

export const userLogin = createAsyncThunk("user/login", async (_, thunkAPI) => {
  try {
    await auth;
    window.localStorage.setItem("userId", JSON.stringify(auth.currentUser.uid));
  } catch (err) {
    console.log("ERROR", err);
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const getDataFromFirebase = createAsyncThunk(
  "firebase/fetchLinks",
  async (_, thunkAPI) => {
    let { user } = thunkAPI.getState();
    console.log("wcześniej", user);

    let list = [];
    try {
      const q = query(
        collection(db, "links"),
        where("user", "==", user.userId)
      );

      await (await getDocs(q)).forEach((el) => list.push(el.data()));

      return list;
    } catch (err) {
      console.log("ERROR", err);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addLink: (state, { payload }) => {
      setDataFirebase(payload);
      // state.data.push(payload);
      console.log("push działa");
    },
  },
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.loginLoading = true;
      state.error = null;
      state.isLogged = false;
      state.userId = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loginLoading = false;
      state.userId = localStorage.getItem("userId");
      state.isLogged = true;
    },
    [userLogin.rejected]: (state, { error }) => {
      state.loginLoading = false;
      state.isLogged = false;
      state.error = error.message;
      state.userId = null;
    },
    [getDataFromFirebase.pending]: (state, { payload }) => {
      console.log("....pending");
      state.loading = true;
      state.error = false;
    },
    [getDataFromFirebase.fulfilled]: (state, action) => {
      console.log("....fulfilled", action.payload);
      state.loading = false;
      state.userLinks = action.payload;
      state.error = false;
    },
    [getDataFromFirebase.rejected]: (state, { error }) => {
      console.log("....error");
      state.loading = false;
      state.userLinks = [];
      state.error = error.message;
    },
  },
});

export default userSlice.reducer;

export const { addLink } = userSlice.actions;
