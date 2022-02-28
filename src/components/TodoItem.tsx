import React from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../app/hooks';
import { removeTodo, updateTodo } from '../slices/todosSlice';
import { Todo } from '../types/Todo';

interface Props {
  item: Todo
}

const Icon = styled.svg`
  width: 32px;
  height: 32px;
`

const RemoveIconStyle = styled(Icon)`
  width: 24px;
  height: 24px;
  opacity: 0;

  cursor: pointer;
`

const TodoItemElement = styled.div`
  display: flex;
  align-items: center;

  padding: 5px 10px;
  border-bottom: 1px solid #ededed;

  &:hover {
    ${RemoveIconStyle}{
      opacity: 1;
    }
  }
`

const CircleIcon = () => ( 
  <Icon xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle></Icon>
)

const CheckCircleIcon = () => ( 
  <Icon xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="172 104 113.3 160 84 132" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><circle cx="128" cy="128" r="96" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle></Icon>
)

const RemoveIcon = () => ( 
  <RemoveIconStyle xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="200" y1="56" x2="56" y2="200" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="200" y1="200" x2="56" y2="56" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></RemoveIconStyle>
)

const Content = styled.p`
  flex-grow: 1;

  padding: 10px 10px 10px 20px;

  font-size: 24px;
  font-weight: semi-bold;
  word-break: break-all;
  line-height: 1.2;

  cursor: default;
`

export const TodoItem: React.FC<Props> = ({item}) => {

  const dispatch = useAppDispatch();

  const checkTodo = () => {
    dispatch(updateTodo(item.id));
  }

  const onRemoveTodo = () => {
    dispatch(removeTodo(item));
  }

  return (
    <TodoItemElement>
      <div onClick={checkTodo}>      
      {
        item.done ? <CheckCircleIcon /> : <CircleIcon />
      }
      </div>

      <Content>{item.content}</Content>
      <div onClick={onRemoveTodo}>
        <RemoveIcon />
      </div>
    </TodoItemElement>
  )
}