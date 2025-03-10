import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Majeed",
};

export const studentSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changer: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.name = "AbdulMajeed";
    },
  },
});

// Action creators are generated for each case reducer function
export const { changer } = studentSlice.actions;

export default studentSlice.reducer;
