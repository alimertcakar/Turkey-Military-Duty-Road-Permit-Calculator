import styled from "styled-components";

const Unit = ({ positionX = 0, positionY = 0, size = 4 }) => {
  return (
    <DivUnit
      $positionX={positionX}
      $positionY={positionY}
      $size={size}
    ></DivUnit>
  );
};

export default Unit;

const offsetForCssGrid = 1; // to align cartesian pos to css pos

const DivUnit = styled.div`
  grid-row-start: ${(props) => props.$positionY + offsetForCssGrid};
  grid-row-end: ${(props) => props.$positionY + offsetForCssGrid + props.$size};
  grid-column-start: ${(props) => props.$positionX + offsetForCssGrid};
  grid-column-end: ${(props) =>
    props.$positionX + offsetForCssGrid + props.$size};
  background: #1c87c5;
  overflow: hidden;
  border-radius: 2px;
  &:hover {
    cursor: pointer;
    filter: brightness(1.1);
  }
`;
