import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleLine
} from "react-icons/ri";

const TodoList = () => {
  const { data, isCheckAll, checkTodo, curFilter, filter } = useContext(
    TodoContext
  );

  return (
    <div className="TodoList">
      <ul>
        {/* {data.map(({ title, completed }, idx) => (
          <li>
            {completed ? (
              <RiCheckboxCircleLine onClick={() => checkTodo(idx)} />
            ) : (
              <RiCheckboxBlankCircleLine onClick={() => checkTodo(idx)} />
            )}
            
            <span style={{
              textDecoration: completed ? 'line-through': null
            }}>{title}</span>
          </li>
        ))} */}
        {data
          .filter(({ completed }) => {
            if (curFilter === 0) return true;
            if (curFilter === 1) return completed === true;
            if (curFilter === 2) return completed === false;
            return false;
          })
          .map(({ title, completed }, idx) => (
            <li>
              {completed ? (
                <RiCheckboxCircleLine onClick={() => checkTodo(idx)} />
              ) : (
                <RiCheckboxBlankCircleLine onClick={() => checkTodo(idx)} />
              )}

              <span
                style={{
                  textDecoration: completed ? "line-through" : null
                }}
              >
                {title}
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
