import { FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, ADD_POST } from './types';

const URL = 'http://localhost:4000/feeds';

export const fetchPosts = () => dispatch => {
  dispatch({ type: FETCH_POSTS_REQUEST})
  fetch(URL)
    .then(response => response.json())
    .then(posts => dispatch({
      type: FETCH_POSTS_SUCCESS,
      payload: posts
    }));
}

export const addPost = postData => dispatch => {
  dispatch({
    type: ADD_POST,
    payload: postData
  });
}
