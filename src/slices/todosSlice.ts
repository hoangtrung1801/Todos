import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import { Todo } from "../types/Todo";

interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: []
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    updateTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find(todo => todo.id === action.payload) as Todo;
      todo.done = !todo.done;
    },
    toggleAllTodos: (state) => {
      let allDone: boolean = true;
      state.todos.forEach((todo,idx) => {
        if(todo.done === false)  allDone = false;
      })
      if(allDone) {
        state.todos.forEach((todo, idx) => {
          todo.done = false;
        })
      } else {
        state.todos.forEach((todo, idx) => {
          todo.done = true;
        })
      }
    },
    removeTodo:(state, action:PayloadAction<Todo>) => {
      const todoIndex = state.todos.indexOf(action.payload);
      state.todos.splice(todoIndex, 1);
    }
  }
})

export const {addTodo, updateTodo, toggleAllTodos, removeTodo} = todosSlice.actions;
export const selectTodos = (state: RootState) => state.todos.todos;
export const countTodosLeft = (state: RootState) => {
  let count: number = 0;
  state.todos.todos.forEach(todo => todo.done ? null : count++);
  return count;
}

export default todosSlice.reducer;