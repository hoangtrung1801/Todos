import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from 'styled-components';
import { useAppDispatch } from "../app/hooks";
import { addTodo, toggleAllTodos } from "../slices/todosSlice";
import { Todo } from "../types/Todo";

const NewTodoWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgb(0 0 0 / 3%);
  border: none;

  display: flex;
  align-items: center;
  overflow: hidden;
`

const ToggleAll = styled.div`
  width: 55px;
  padding: 16px;
  position: relative;

  transform: rotate(90deg);

  &:before {
    content: '❯';
    font-size: 1.8rem;
    color: #e6e6e6;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const InputNewTodo = styled.input`
  flex-grow: 1;
  padding: 16px 16px 16px 0;

  border: none;
  font-size: 24px;

  background-color: inherit;

  &::placeholder {
    color: #e6e6e6;
    font-style: italic;
  }

  &:focus {
    outline: none;
  }
`

export const NewTodo = () => {

  const [content, setContent] = useState("");
  const dispatch = useAppDispatch();

  const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setContent(e.currentTarget.value);
  }

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if(e.key === "Enter" && content !== "") {
      dispatch(addTodo({
        content,
        done: false,
        id: nanoid()
      } as Todo));
      setContent("");
    }
  }

  const toggleTodos = (): void => {
    dispatch(toggleAllTodos());
  }

  return (
    <NewTodoWrapper> 
      <ToggleAll onClick={toggleTodos}/>
      <InputNewTodo placeholder="What needs to be done?" value={content} onChange={onChange} onKeyPress={onKeyPress}/>
    </NewTodoWrapper>
  );
}