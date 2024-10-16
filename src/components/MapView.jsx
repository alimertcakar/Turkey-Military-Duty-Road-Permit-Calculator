import styled from "styled-components";

import useGame from "../hooks/useGame";
import Unit from "./Unit";

const MapView = () => {
  useGame();
  return (
    <DivMapView>
      <Unit positionX={4} positionY={4} />
    </DivMapView>
  );
};

export default MapView;

const DivMapView = styled.div`
  display: grid;
  grid-template-columns: repeat(128, 1fr);
  grid-template-rows: repeat(128, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 800px;
  height: 800px;
  border: 1px solid #e6e6e6;
  border-radius: 2px;
`;
