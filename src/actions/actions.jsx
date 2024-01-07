import * as actions from "./actionTypes";

export const bugAdded = (description) => ({
  type: actions.ADD_BUG,
  payload: {
    description,
  },
});

export const bugRemoved = (id) => ({
  type: actions.REMOVE_BUG,
  payload: {
    id,
  },
});

export const bugStatusChanged = (id) => ({
  type: actions.UPDATE_BUG,
  payload: {
    id,
  },
});
