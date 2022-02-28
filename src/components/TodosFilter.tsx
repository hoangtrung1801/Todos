import React from "react";
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { changeFilter, selectFilterIndex } from "../slices/filtersSlice";
import { countTodosLeft, selectTodos } from "../slices/todosSlice";
import { Todo } from "../types/Todo";

interface Props {
  todos?: Todo[];
}

const filters: string[] = [
  'All',
  'Active',
  'Completed'
]

const TodosFilterWrapper = styled.div`
  width: 100%;
  height: 40px;

  display: flex;
  align-items: center;

  padding: 0 15px;
`
const CountTodos = styled.div`
  margin-right: 50px;
`
const FilterList = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  .active {
    outline: 1px solid rgba(175, 47, 47, 0.2);
    border-radius: 3px;
  }
`

const FilterItem = styled.div`
  padding: 2px 6px;
  margin: 0 4px;
  cursor: pointer;
  
  &:hover {
    outline: 1px solid rgba(175, 47, 47, 0.1);
    border-radius: 3px;
  }
`

export const TodosFilter: React.FC<Props> = () => {

  const dispatch = useAppDispatch();

  const count = useAppSelector(countTodosLeft);
  const filterIndex = useAppSelector(selectFilterIndex);

  const onChange = (idx: number): void =>{
    dispatch(changeFilter(idx));
  }

  return (
    <TodosFilterWrapper>
      <CountTodos>
        {count} items left
      </CountTodos>
      <FilterList>
        {
          filters.map(( item, idx ) => (
            <FilterItem key={idx} className={idx === filterIndex ? "active" : ""} onClick={() => onChange(idx)}>{item}
            </FilterItem>           
          ))
        }
      </FilterList>
    </TodosFilterWrapper>
  )
}