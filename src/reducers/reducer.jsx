import * as actions from "../actions/actionTypes";
let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.ADD_BUG:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];

    case actions.REMOVE_BUG:
      return state.filter((bug) => bug.id !== action.payload.id);

    case actions.UPDATE_BUG:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true },
      );

    default:
      return state;
  }
}
