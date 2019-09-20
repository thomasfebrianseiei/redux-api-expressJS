import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () => dispatch => {
  dispatch({type: "FETCH_POSTS_BEGIN"})
  
  fetch(process.env.REACT_APP_API_BACKEND)
    .then(res => {
      return res.json();
    })
    .then(users => {
      dispatch({
        type: FETCH_POSTS,
        payload: users
      });
    });
};

export const createPost = postData => dispatch => {
  fetch(process.env.REACT_APP_API_BACKEND, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(postData)
  })
    .then(res => {
      return res.json();
    })
    .then(users => {
      dispatch({
        type: NEW_POST,
        payload: users
      });
    });
};
