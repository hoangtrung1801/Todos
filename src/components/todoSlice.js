import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  data: [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      completed: true
    },
    {
      userId: 1,
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false
    }
  ],
  isCheckAll: false,
  curFilter: 0
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    toggleCheckAll(state) {
      state.isCheckAll = !state.isCheckAll;
      state.data.forEach((todo) => {
        todo.completed = state.isCheckAll;
      });
    },

    addTodo: {
      reducer(state, action) {
        state.data.push(action.payload);
      },
      prepare(title) {
        return {
          payload: {
            id: nanoid(),
            title,
            completed: false
          }
        };
      }
    },

    checkTodo(state, action) {
      const existingTodo = state.data.find(
        (todo) => todo.id === action.payload
      );
      existingTodo.completed = !existingTodo.completed;
    },

    setFilter(state, action) {
      state.curFilter = action.payload;
    }
  }
});

export const {
  toggleCheckAll,
  addTodo,
  checkTodo,
  setFilter
} = todoSlice.actions;

export default todoSlice.reducer;
