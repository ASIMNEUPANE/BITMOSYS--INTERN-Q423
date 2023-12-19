import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../services/auth";
import { setToken } from "../utils/session";
import { getALl } from "../services/coins";

const initialState = {
  user: {},
  isLoggedIn: false,
  roles: [],
  error: "",
  loading: false,
};

export const getCoins = createAsyncThunk(
  "coins/getCoins",

  async () => {
    try {
      const resp = await getALl();
      return resp.data;
    } catch (e) {
      if (e.response) {
        throw e;
      }
    }
  }
);

const coinsSlice = createSlice({
  name: "coins",
  initialState,
//   reducers: {
//     setIsLoggedIn: (state, action) => {
//       state.isLoggedIn = action.payload;
//     },
//     setLogOut: (state, action) => {
//       (state.user = {}), (state.roles = []), (state.isLoggedIn = false);
//     },
//   },
  extraReducers: (builder) => {
    builder.addCase(getCoins.fulfilled, (state, action) => {
      
      state.loading = false;
      state.isLoggedIn = true;
      state.user = action.payload.data.user;
      setToken(action.payload.data.token)
      state.roles.push(...action.payload.data.user.role);
    });
    builder.addCase(loginByEmail.pending, (state) => {
      state.loading = false;
    });
    builder.addCase(loginByEmail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.msg || action.error.message;
    });
  },
});

export const { setIsLoggedIn, setLogOut } = authSlice.actions;
export const authReducer = authSlice.reducer;
