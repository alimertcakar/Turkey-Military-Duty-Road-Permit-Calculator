import styled from "styled-components";

import { CardState } from "../server/cardMachine";
import SlotContainer from "./SlotContainer";

const Arena = ({ state, cards }) => {
  console.log(cards, "cards");
  return (
    <DivArena>
      <SlotContainer
        state={state}
        cards={cards.filter((card) =>
          card.getSnapshot().matches(CardState.TAPPED)
        )}
      />
      <SlotContainer
        state={state}
        cards={cards.filter((card) =>
          card.getSnapshot().matches(CardState.HAND)
        )}
      />
      <SlotContainer
        state={state}
        cards={cards.filter((card) =>
          card.getSnapshot().matches(CardState.DECK)
        )}
      />
    </DivArena>
  );
};

export default Arena;

const DivArena = styled.div`
  padding: 15px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  height: 90%;
  flex-direction: row;
`;
