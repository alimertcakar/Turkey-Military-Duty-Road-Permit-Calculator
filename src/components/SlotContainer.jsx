import styled from "styled-components";

import Card from "./Card";

const SlotContainer = ({ cards, state }) => {
  const cardSnapshots = cards.map((card) => card.getSnapshot());
  const getCardsByPositionIndex = (cards, positionIndex) => {
    return cards.filter((card) => card.context.positionIndex === positionIndex);
  };
  return (
    <DivContainer>
      <DivSlot>
        {getCardsByPositionIndex(cardSnapshots, 0).map((card, index) => (
          <Card state={state} key={card?.context?.id} {...card} index={index} />
        )) ?? "-"}
      </DivSlot>
      <DivSlot>
        {getCardsByPositionIndex(cardSnapshots, 1).map((card, index) => (
          <Card state={state} key={card?.context?.id} {...card} index={index} />
        )) ?? "-"}{" "}
      </DivSlot>
      <DivSlot>
        {getCardsByPositionIndex(cardSnapshots, 2).map((card, index) => (
          <Card
            state={state}
            key={card?.context?.id}
            {...card.context}
            index={index}
          />
        )) ?? "-"}
      </DivSlot>
    </DivContainer>
  );
};

export default SlotContainer;

const DivContainer = styled.div`
  padding: 15px;
  margin-top: 20px;
  display: flex;

  align-items: center;
  width: 100%;
  justify-content: center;
`;

const DivSlot = styled.div`
  padding: 15px;
  margin-top: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100px;
  height: 150px;
  display: inline-block;
  margin-right: 10px;
  text-align: center;
  line-height: 100px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;
