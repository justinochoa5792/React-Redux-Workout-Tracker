const initialState = [];

const activitiesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CREATE_ACTIVITY":
      return [
        ...state,
        {
          name: payload.name,
          duration: payload.duration,
        },
      ];
    case "DELETE_ACTIVITY":
      const copyState = [...state];
      const i = copyState.findIndex((x) => x.id === payload.id);
      copyState.splice(i, 1);
      return [...copyState];
    default:
      return state;
  }
};

export default activitiesReducer;
