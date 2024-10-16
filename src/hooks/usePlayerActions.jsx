import { isObject } from "lodash";

const usePlayerActions = ({ send, state, gameMachine }) => {
  const stateKey = isObject(state.value)
    ? Object.keys(state.value)[0]
    : state.value;
  const availableActions = gameMachine.states?.[stateKey]?.events;

  return availableActions?.map?.((actionName) => ({
    name: actionName,
    action: (options) => send({ type: actionName, ...options }),
  }));
};

export default usePlayerActions;
