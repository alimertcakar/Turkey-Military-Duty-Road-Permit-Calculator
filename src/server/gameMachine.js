import { assign, createMachine } from "xstate";

export const GameState = {
  WAITING: "WAITING",
  STARTED: "STARTED",
  UPKEEP: "UPKEEP", // untap
  DRAW: "DRAW", // as in draw card
  MAIN: "MAIN", // play abilities etc.
  COMBAT: "COMBAT",
  /**
   * Combat sub states
  Declare Attackers State: The attacking player declares which creatures are attacking.
  Declare Blockers State: The defending player declares blockers.
  Damage Resolution State: Calculate damage and resolve effects.
  */
  END_TURN: "END_TURN", // Switch parent machine to next player or game over phase
  GAME_OVER: "GAME_OVER",
};
const CombatSubState = {
  DECLARE_ATTACKERS: "DECLARE_ATTACKERS",
  DECLARE_BLOCKERS: "DECLARE_BLOCKERS",
  DAMAGE_RESOLUTION: "DAMAGE_RESOLUTION",
};

export const gameMachine = createMachine(
  {
    id: "game",
    initial: "WAITING",
    context: {
      players: [],
      cards: [],
      currentPlayer: null,
    },
    states: {
      [GameState.WAITING]: {
        on: {
          startGame: GameState.STARTED,
          addCard: {
            actions: "addCard",
          },
          setCurrentPlayer: {
            actions: "setCurrentPlayer",
          },
        },
      },
      [GameState.STARTED]: {
        on: {
          toUpkeep: GameState.UPKEEP,
          addCard: {
            actions: "addCard",
          },
        },
      },
      [GameState.UPKEEP]: {
        on: {
          toDraw: GameState.DRAW,
        },
      },
      [GameState.DRAW]: {
        on: {
          toMain: GameState.MAIN,
        },
      },
      [GameState.MAIN]: {
        on: {
          toCombat: GameState.COMBAT,
        },
      },
      [GameState.COMBAT]: {
        initial: CombatSubState.DECLARE_ATTACKERS,
        states: {
          [CombatSubState.DECLARE_ATTACKERS]: {
            on: {
              toDeclareBlockers: CombatSubState.DECLARE_BLOCKERS,
            },
          },
          [CombatSubState.DECLARE_BLOCKERS]: {
            on: {
              toDamageResolution: CombatSubState.DAMAGE_RESOLUTION,
            },
          },
          [CombatSubState.DAMAGE_RESOLUTION]: {
            on: {
              toEndTurn: "#game." + GameState.END_TURN,
            },
          },
          on: {
            toEndTurn: GameState.END_TURN,
          },
        },
      },
      [GameState.END_TURN]: {
        on: {
          setCurrentPlayer: {
            actions: "setCurrentPlayer",
          },
          toUpkeep: GameState.UPKEEP,
          toGameOver: GameState.GAME_OVER,
        },
      },
      [GameState.GAME_OVER]: {},
    },
    on: {
      addPlayer: {
        actions: "addPlayer",
      },
    },
  },
  {
    actions: {
      addPlayer: assign({
        players: ({ context, event }) => {
          return [...context.players, event.player];
        },
      }),
      addCard: assign({
        cards: ({ context, event }) => {
          return [...context.cards, event.card];
        },
      }),
      setCurrentPlayer: assign({
        currentPlayer: ({ event }) => {
          return event.playerId;
        },
      }),
    },
  }
);
