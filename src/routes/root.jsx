import { useMachine } from "@xstate/react";
import { useEffect } from "react";

import Arena from "../components/Arena";
import Player from "../components/Player";
import { generateMockPlayerHand } from "../game/mock";
import usePlayerActions from "../hooks/usePlayerActions";
import { gameMachine } from "../server/gameMachine";

export default function Root() {
  const [state, send] = useMachine(gameMachine);
  const playerActions = usePlayerActions({ send, state, gameMachine });
  const { players, currentPlayer } = state.context;

  useEffect(() => {
    send({ type: "addPlayer", player: { name: "Player 1", id: 1 } });
    send({ type: "addPlayer", player: { name: "AI", id: 2 } });
    send({ type: "setCurrentPlayer", playerId: 1 });
    send({ type: "startGame" });
    generateMockPlayerHand(send);
    send({ type: "toUpkeep" });
  }, [send]);

  const player = players?.[0];
  const opponent = players?.[1];

  return (
    <div className="homepage">
      <Player
        isOpponent
        {...opponent}
        actions={playerActions}
        currentPlayer={currentPlayer}
      />
      <Arena state={state} cards={state.context.cards} />
      <Player
        {...player}
        actions={playerActions}
        currentPlayer={currentPlayer}
      />
      <div style={{ position: "fixed", left: 5, top: 5, color: "#fff" }}>
        State: {JSON.stringify(state.value)}
      </div>
    </div>
  );
}
