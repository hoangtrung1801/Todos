import React from 'react';
import styled from 'styled-components';
import { Todos } from './Todos';

const BodyElement = styled.div`
  background-color: #f5f5f5;
  color: #4d4d4d;

  min-height: 100vh;
  min-width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.h1`
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
`

export const Body: React.FC = () => {

  return(
    <BodyElement >
      <Title>todos</Title>
      <Todos/>
    </BodyElement>
  )
}