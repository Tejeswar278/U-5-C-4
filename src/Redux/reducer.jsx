import {LOGIN } from "./actions"

const init = {
  isLoggedin : false,
  user: {},
};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {...store, user: payload, isLoggedin: true};
    default:
      return store;
  }
};
