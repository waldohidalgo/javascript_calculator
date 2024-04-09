export const initialStateLimite = {
  limite: 0,
  change: false,
};
export const limiteReducer = (state = initialStateLimite, action) => {
  switch (action.type) {
    case "LIMIT":
      return {
        ...state,
        limite: action.payload,
        change: !state.change,
      };
    default:
      return state;
  }
};
