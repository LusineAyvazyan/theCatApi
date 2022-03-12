import { FETCH_CATEGORY, LOADING, ERROR } from "../types";

const initialState = {
  category: {},
  error: null,
  loading: false,
};

export default function category(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORY:
      return {
        ...state,
        category: action.data,
        error: false,
        loading: false,
      };
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
