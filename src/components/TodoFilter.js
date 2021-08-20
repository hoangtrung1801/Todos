import Button from "@atlaskit/button";
import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoFilter = () => {
  const { filter, curFilter, setCurFilter } = useContext(TodoContext);

  const onClick = (idx) => setCurFilter(idx);

  return (
    <div className="TodoFilter">
      <ul>
        {filter.map((item, idx) => {
          if (curFilter === idx)
            return (
              <li onClick={() => onClick(idx)}>
                <Button isSelected>{item}</Button>
              </li>
            );
          else
            return (
              <li onClick={() => onClick(idx)}>
                <Button>{item}</Button>
              </li>
            );
        })}
      </ul>
    </div>
  );
};

export default TodoFilter;
