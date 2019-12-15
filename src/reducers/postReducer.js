import { FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, ADD_POST } from '../actions/types';

const initialState = {
  loading: false,
  items: [],
  item: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload
      }
    default:
      return state;
  }
}
