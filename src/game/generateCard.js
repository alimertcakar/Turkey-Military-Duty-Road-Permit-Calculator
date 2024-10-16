import { createActor } from "xstate";

import { cardMachine } from "../server/cardMachine";
import { cards } from "./cards";

export const generateCard = (cardName, extraOptions = { positionIndex: 0 }) => {
  const cardData = cards[cardName];
  const cardActor = createActor(cardMachine, {
    input: {
      ...cardData,
      ...extraOptions,
    },
  });
  cardActor.start();

  return cardActor;
};
