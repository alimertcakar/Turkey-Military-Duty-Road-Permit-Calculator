import { generateCard } from "./generateCard";

export const generateMockPlayerHand = (send) => {
  send({
    type: "addCard",
    card: generateCard("Zach", { positionIndex: 0 }),
  });
  send({
    type: "addCard",
    card: generateCard("Zorian", { positionIndex: 0 }),
  });
  send({
    type: "addCard",
    card: generateCard("Kyron", { positionIndex: 1 }),
  });
  send({
    type: "addCard",
    card: generateCard("Xvim", { positionIndex: 1 }),
  });
  send({
    type: "addCard",
    card: generateCard("Damien", { positionIndex: 2 }),
  });
  send({
    type: "addCard",
    card: generateCard("Taiven", { positionIndex: 2 }),
  });
};
