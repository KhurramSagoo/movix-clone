import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    url: {},
    genres: {},
  },
  reducers: {
    getApiConfiguration: (state, action) => {
      state.url = action.payload;
    },
    getApiGeneres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getApiConfiguration, getApiGeneres } = homeSlice.actions;

export default homeSlice.reducer;
