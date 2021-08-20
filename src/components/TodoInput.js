import { AiOutlineCheckCircle, AiFillCheckCircle } from "react-icons/ai";
import { TodoContext } from "../context/TodoContext";
import React, { useContext } from "react";

const TodoInput = () => {
  const {
    isCheckAll,
    valueInput,
    setValueInput,
    addTodo,
    toggleCheckAll
  } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(valueInput);

    setValueInput("");
  };

  const handleChange = (e) => {
    setValueInput(e.target.value);
  };

  const handleCheckAll = (e) => {
    toggleCheckAll();
  };

  return (
    <div className="TodoInput">
      <form onSubmit={handleSubmit}>
        <span onClick={handleCheckAll}>
          {isCheckAll ? <AiFillCheckCircle /> : <AiOutlineCheckCircle />}
        </span>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Type something ..."
          value={valueInput}
        />
      </form>
    </div>
  );
};

export default TodoInput;
