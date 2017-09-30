import { FETCH_CATEGORIES } from '../actions/index';

const INITIAL_STATE = { all: [], ready: false };

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case FETCH_CATEGORIES:
    return {...state, all: action.payload.data.items, ready: true };
  default:
    return state;
  }
}