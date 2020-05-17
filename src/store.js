import { createStore } from 'redux';

const reduxActionMap = {
  add(state, { payload }) {
    return {
      ...state,
      ...payload,
    };
  },
};

const reducer = (state = {}, action) => {
  console.log(action)
  return reduxActionMap[action.type]
    ? reduxActionMap[action.type](state, action)
    : {
        count: state.count,
      };
};

export default createStore(reducer, { count: 11 });
