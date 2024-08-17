import { createSlice } from "@reduxjs/toolkit";
import Gettodo from "../utils/Gettodo";
const initialState = Gettodo();

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    Addtask: (state, action) => {
      const { name, description } = action.payload;

      const newTodo = {
        id: Date.now(),
        name,
        description,
        isCompleted: false,
        inProcess: true,
      };

      state.push(newTodo);
    },

    deletetask: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },

    toggletask: (state, action) => {
      const todo = state.find((task) => task.id === action.payload);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
    },
  },
});
export const { Addtask, deletetask, toggletask } = todoSlice.actions;
export default todoSlice.reducer;
