import React from "react";

export const TodoContext = React.createContext();

export const TodoProvider = ({ children, value }) => {
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
