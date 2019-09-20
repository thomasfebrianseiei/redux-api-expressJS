import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
  items: [],
  item: {},
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "FETCH_POSTS_BEGIN":
      return {
        ...state,
        isLoading: true
      };
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload.data,
        isLoading: false
      };
    case NEW_POST:
      console.log(action.payload);

      return {
        ...state,
        items: action.payload.data
      };
    default:
      return state;
  }
}
