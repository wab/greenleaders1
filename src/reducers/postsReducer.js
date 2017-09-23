import { FETCH_POSTS, FETCH_POST } from '../actions/index';

const INITIAL_STATE = { all: [], post: null, ready: false };

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
  case FETCH_POSTS:
    return { ...state, all: action.payload.data.items, ready: true };
  case FETCH_POST:
    return { ...state, post: action.payload.data.items };
  default:
    return state;
  }
}