export const initialState = { expression: [123, "+", 10] };

export function handleAction(state, action) {
  switch (action) {
    case "C":
      return {
        ...state,
        expression: state.expression.slice(0, -1),
      };
    default:
      throw new Error(`Unhandled action: ${action}`);
  }
}

export function formatDisplay({ expression }) {
  return expression.join(" ") || "0";
}
