import styled from "styled-components";

import { GameState } from "../server/gameMachine";

const Card = ({ state, name, index }) => {
  //   const canPlay = state.matches(GameState.COMBAT);
  return (
    <DivCard $index={index}>
      <span>{name}</span>
    </DivCard>
  );
};

export default Card;

const DivCard = styled.div`
  display: flex;
  padding: 10px;
  width: 100px;
  border: 1px solid #e9e9e9;
  border-radius: 5px;
  background-color: #f0f0f0;
  cursor: pointer;
  z-index: ${({ $index }) => $index};
  position: relative;
  top: -${({ $index }) => $index * 40}px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #e9e9e9;
    z-index: 10;
  }
  &:active {
    background-color: #d9d9d9;
  }
  & span {
    font-size: 12px;
    font-weight: bold;
    white-space: nowrap;
  }
`;
