import {
  FETCH_DATA,
  LOADING,
  ERROR,
  LIMIT_IMAGE,
  EMPTY_FETCH_DATA,
} from "../types";

const initialState = {
  cat: [],
  limit: 10,
};

export default function cat(state = initialState, action) {
  switch (action.type) {
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
    case LOADING:
      return {
        ...state,
        error: false,
        loading: true,
      };
    case ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
}
