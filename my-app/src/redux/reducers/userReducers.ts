import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { UserState, UserData } from "../types";

const http = process.env.REACT_APP_SERVER_URL;

type ErrorPayload = {
  message: string; // Define the structure of your error data
};

export const registerUser = createAsyncThunk<
  UserData, // Type for successful response
  UserData, // Type for the argument (userData)
  {
    rejectValue: ErrorPayload;
  }
>("user/register", async (userData: UserData, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${http}/api/v1/auth/signup`, userData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response && error.response.data) {
      return rejectWithValue({ message: error.response.data });
    } else {
      return rejectWithValue({ message: "Unknown error" });
    }
  }
});

const initialState: UserState = {
  isRegistering: false,
  data: null,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isRegistering = true;
        state.error = null; // Clear any previous errors when starting the request
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isRegistering = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isRegistering = false;
        state.data = null;
        state.error = action.payload?.message || "Unknown error"; // Access the error message
      });
  },
});

export const selectRegistered = (state: RootState) => state.user.isRegistering;
export const selectError = (state: RootState) => state.user.error;

export default userSlice.reducer;
