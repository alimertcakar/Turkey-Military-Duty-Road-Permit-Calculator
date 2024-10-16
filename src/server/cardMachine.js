import { assign, createMachine } from "xstate";

export const CardState = {
  DECK: "DECK",
  HAND: "HAND",
  UNTAPPED: "UNTAPPED", // can't do anything else for this turn
  TAPPED: "TAPPED", // default state of a drawerd card, can attack or block
  ATTACKING: "ATTACKING",
  DEFENDING: "DEFENDING",
  GRAVEYARD: "GRAVEYARD",
};

export const cardMachine = createMachine(
  {
    id: "card",
    initial: "DECK",
    context: ({ input }) => ({
      id: "none",
      name: "none",
      positionIndex: 0,
      health: 0,
      attack: 0,
      defense: 0,
      ...input,
    }),
    states: {
      [CardState.DECK]: {
        on: {
          draw: CardState.HAND,
        },
      },
      [CardState.HAND]: {
        on: {
          play: CardState.UNTAPPED,
        },
      },
      [CardState.UNTAPPED]: {
        on: {
          tap: CardState.TAPPED,
        },
      },
      [CardState.TAPPED]: {
        on: {
          untap: CardState.UNTAPPED,
          die: CardState.GRAVEYARD,
        },
      },
      [CardState.ATTACKING]: {
        on: {
          resolveBlock: CardState.TAPPED,
          die: CardState.GRAVEYARD,
        },
      },
      [CardState.DEFENDING]: {
        on: {
          resolveBlock: CardState.TAPPED,
        },
      },
      [CardState.GRAVEYARD]: {},
    },
  },
  {
    actions: {
      receiveDamage: assign({
        health: ({ context, event }) => context.health - event.damage,
      }),
    },
  }
);
