import React from 'react';
import styled from'styled-components';
import { useAppSelector } from '../app/hooks';
import { Todo } from '../types/Todo';
import { NewTodo } from './NewTodo';
import { TodosFilter } from './TodosFilter';
import { TodosList } from './TodosList';

const TodosWrapper = styled.div`
  min-width: 500px;
  background-color: #fff;

  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
`

export const Todos = () => {
  return (
    <TodosWrapper>
      <NewTodo />
      <TodosList />
      <TodosFilter />
    </TodosWrapper>
  );
}