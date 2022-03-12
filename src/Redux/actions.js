import {
  FETCH_DATA,
  FETCH_CATEGORY,
  LIMIT_IMAGE,
  EMPTY_FETCH_DATA,
} from "./types";

export const limitImage = () => ({
  type: LIMIT_IMAGE,
});

export const fetchCategory = (data) => ({
  type: FETCH_CATEGORY,
  data,
});

export const fetchData = (data) => ({
  type: FETCH_DATA,
  data,
});

export const emptyFetchData = () => ({
  type: EMPTY_FETCH_DATA,
});
