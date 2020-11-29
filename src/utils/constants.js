export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
export const API_KEY = process.env.REACT_APP_API_KEY;
export const SEARCH_MULTI = process.env.REACT_APP_SEARCH_MULTI;
export const SEARCH_ALL = `${API_BASE_URL}${SEARCH_MULTI}&api_key=${API_KEY}`;
