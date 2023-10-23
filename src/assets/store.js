import { configureStore } from "@reduxjs/toolkit";
import todoSliceReducer from "../projects/ToDoApp/todoSlice"

const store = configureStore({
  reducer: {
    todo: todoSliceReducer,
  },
});

export default store;
