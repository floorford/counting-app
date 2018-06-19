// importing moment for the time history
import moment from 'moment';

const resetCounter = (state) => {
  return {
    ...state,
    count: 0,
  };
};

const resetHistory = (state) => {
  return {
    ...state,
    history: [],
  };
};

const updateCounter = (state, { amount }) => {
  let max = 10;
  let newValue = state.count + amount;
  let change;

  amount === 1 ? change = "Incremented" : change = "Decremented"

  let sentence = `${moment().calendar()}: ${change} from ${state.count} to ${newValue}`

  if (newValue >= 0 && newValue <= max) {
    count = newValue
    return {
      ...state,
      count: count,
      history: state.history.concat(sentence)
    }
  } else {
    return state // the state ALWAYS has be to returned even if it's not being changed, good to do your if, and return after
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "resetCounter": return resetCounter(state, action);
    case "resetHistory": return resetHistory(state, action);
    case "updateCounter": return updateCounter(state, action);
    default: return state;
  }
}

export default reducer;
