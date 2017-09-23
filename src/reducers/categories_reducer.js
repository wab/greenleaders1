import { FETCH_CATEGORIES } from '../actions/index';

const INITIAL_STATE = { categories: [] };

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case FETCH_CATEGORIES:
    return { categories: action.payload.data, ...state };
  default:
    return state;
  }
}