import {
  FETCH_DATA,
  LOADING,
  ERROR,
  LIMIT_IMAGE,
  EMPTY_FETCH_DATA,
  FETCH_CATEGORY,
} from "../types";

const initialState = {
  category: {},
  cat: [],
  limit: 10,
};

export default function cat(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORY:
      return {
        ...state,
        category: action.data,
      };
    case FETCH_DATA:
      return {
        ...state,
        cat: [...state.cat, ...action.data],
      };
    case EMPTY_FETCH_DATA:
      return {
        ...state,
        cat: [],
      };
    case LIMIT_IMAGE: {
      return {
        ...state,
        limit: state.limit + 10,
      };
    }
    default:
      return state;
  }
}
