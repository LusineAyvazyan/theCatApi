
import { FETCH_DATA, ERROR, FETCH_CATEGORY, LOADING, LIMIT_IMAGE, EMPTY_FETCH_DATA } from './types'


export const isLoading = (bool) => ({
  type: LOADING,
  bool
});

export const isError = (bool) => ({
  type: ERROR,
  bool
});

export const limitImage = () => ({
  type: LIMIT_IMAGE,
  
});


export const fetchCategory = (data) => ({
  type: FETCH_CATEGORY,
  data
});

export const fetchData = (data) => ({
  type: FETCH_DATA,
  data,
});


export const emptyFetchData = () => ({
  type: EMPTY_FETCH_DATA,
});


