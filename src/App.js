import React, { useState } from "react";
import { AiTwotoneRightSquare } from "react-icons/ai";

import Todos from "./components/Todos";
import { TodoProvider } from "./context/TodoContext";
import "./styles.css";

const filter = ["all", "completed", "uncompleted"];
export default function App() {
  const [data, setData] = useState([
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
  ]);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [valueInput, setValueInput] = useState("");
  const [curFilter, setCurFilter] = useState(0);

  const addTodo = (title) => {
    setData([...data, { title, completed: false }]);
  };

  const checkTodo = (idx) => {
    setData([
      ...data.slice(0, idx),
      { ...data[idx], completed: !data[idx].completed },
      ...data.slice(idx + 1)
    ]);
  };

  const toggleCheckAll = () => {
    setIsCheckAll(!isCheckAll);
    let copyData = data.map((todo) => {
      return { ...todo, completed: !isCheckAll };
    });
    setData(copyData);
  };

  const store = {
    data,
    setData,
    isCheckAll,
    setIsCheckAll,
    valueInput,
    setValueInput,
    addTodo,
    checkTodo,
    toggleCheckAll,
    curFilter,
    setCurFilter,
    filter
  };

  return (
    <TodoProvider value={store}>
      <div className="App">
        <Todos data={data} />
      </div>
    </TodoProvider>
  );
}
