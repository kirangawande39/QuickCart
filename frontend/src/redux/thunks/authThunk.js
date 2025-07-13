// redux/thunks/authThunk.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Login Thunk — Async action to call login API
export const loginUser = createAsyncThunk("auth/loginUser", async (credentials, thunkAPI) => {
  try {
    const res = await axios.post("/api/auth/login", credentials);
    return res.data; // This will go to extraReducers fulfilled
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});
