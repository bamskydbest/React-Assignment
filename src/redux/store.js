import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./student/tasksSlice";

export const store = configureStore({
  reducer: {
    // student: studentReducer,
    tasks: tasksReducer,
  },
});
