import { collection, getDocs, query, where } from "@firebase/firestore";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setDataFirebase } from "config/auth";
import { db } from "config/fbConfig";

let initialState = { loading: false, data: [], error: null };

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

export const linksSlice = createSlice({
  name: "links",
  initialState,
  reducers: {
    addLink: (state, { payload }) => {
      setDataFirebase(payload);
      // state.data.push(payload);
      console.log("push działa");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDataFromFirebase.pending, (state, { payload }) => {
      console.log("....pending");
      state.loading = true;

      state.error = false;
    });

    builder.addCase(getDataFromFirebase.fulfilled, (state, action) => {
      console.log("....fulfilled", action.payload);
      state.loading = false;
      state.data = action.payload;
      state.error = false;
    });
    builder.addCase(getDataFromFirebase.rejected, (state, { error }) => {
      console.log("....error");
      state.loading = false;
      state.data = {};
      state.error = error.message;
    });
  },
});

export default linksSlice.reducer;

export const { addLink, getDocument } = linksSlice.actions;
