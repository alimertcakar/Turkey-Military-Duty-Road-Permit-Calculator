import styled from "styled-components";

const Player = ({ name, id, actions, isOpponent = false, currentPlayer }) => {
  return (
    <DivPlayer $isOpponent={isOpponent} $isMyTurn={currentPlayer === id}>
      <div>
        {name}
        <div>
          {!isOpponent &&
            actions?.map?.((action) => (
              <button
                className="action-button"
                key={action.name}
                onClick={() => action.action()}
              >
                {action.name}
              </button>
            ))}
        </div>
      </div>
    </DivPlayer>
  );
};

export default Player;

const DivPlayer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #3d3d3d;
  border-radius: 5px;
  ${({ $isMyTurn }) => ($isMyTurn ? "border-color: green;" : "")}
  position: fixed;
  ${({ $isOpponent }) => ($isOpponent ? "top: 15px;" : "bottom: 15px;")}
  width: 400px;
  background: #383838;
  min-height: 40px;

  .action-button {
    border-radius: 5px;
    background-color: #222;
    color: white;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    box-shadow: 0 0 10px limegreen;
    cursor: pointer;
    transition: box-shadow 0.3s ease;
  }

  .action-button:hover {
    box-shadow: 0 0 10px orange, 0 0 20px orange, 0 0 30px orange;
  }
`;
