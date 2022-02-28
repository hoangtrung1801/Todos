import React, { useEffect } from "react";
import { useAppSelector } from "../app/hooks";
import { selectFilterIndex } from "../slices/filtersSlice";
import { selectTodos } from "../slices/todosSlice";
import { Todo } from "../types/Todo";
import { TodoItem } from "./TodoItem";

export const TodosList = () => {

  const todos = useAppSelector(selectTodos);
  const filterIndex = useAppSelector(selectFilterIndex);

  return (
    <div>
      {
        todos.map(( todo, idx ) => {
          if(filterIndex === 0) {
            return (
              <TodoItem item={todo} key={idx}/>
            )
          } else if(filterIndex == 1 && todo.done === false) {
            return (
              <TodoItem item={todo} key={idx}/>
            )
          } else if(filterIndex == 2 && todo.done){
            return (
              <TodoItem item={todo} key={idx}/>
            )
          }
        })
      }
    </div>
  );
}