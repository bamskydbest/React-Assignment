import { createSlice } from "@reduxjs/toolkit";

const items = [
  {
    id: 1,
    name: "Mahmoud Abdulmajeed Taiye",
    description: "Black and Tall",
  },
  {
    id: 2,
    name: "Sanusi Oyedeji Sanusi",
    description: "Black and Medium height",
  },
  {
    id: 3,
    name: "Bakare Rukayat Olaitan",
    description: "Open Minded person ",
  },
  {
    id: 4,
    name: "Abayomi Abdulazeez Lekan",
    description: "Tall and thin",
  },
  {
    id: 5,
    name: "Lawal Wasiu Kolawole",
    description: "Light and promiscous ",
  },
  {
    id: 6,
    name: "Oyewale Feranmi",
    description: "Tall and a church guy ",
  },
];

const initialState = {
  name: "Mahmoud Abdulmajeed Taiye",
  height: "7ft",
  age: 26,
  course: "React",
  religion: "Islam",
  items: items,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    changer: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // state.name = "AbdulMajeed";

      //If you dont want to hardcode it follow this step

      state.name = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changer } = tasksSlice.actions;

export default tasksSlice.reducer;
