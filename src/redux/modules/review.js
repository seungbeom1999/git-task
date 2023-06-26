const initialState = [
  {
    id: crypto.randomUUID(),
    title: "완성하자",
  },
];

const review = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      return [...state, action.payload];
    case "DELETE_COMMENT":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export default review;
