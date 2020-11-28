import { createSlice } from '@reduxjs/toolkit';
import { SEARCH_ALL } from '../../utils/constants';
import { ApiClientSingleton } from '../../utils';

const apiClient = ApiClientSingleton.getApiInstance();

const showsState = {
  shows: [],
  pages: {},
  searchQuery: '',
  loadingShows: false,
  errorShows: null,
  currentRequestId: undefined
};

const slice = createSlice({
  name: 'shows',
  initialState: showsState,
  reducers: {
    fetchingShowsStarted: (state) => {
      state.loadingShows = true;
    },
    fetchingShowsSuccess: (state, { payload }) => {
      state.shows = payload.results;
      state.pages = {
        currentPage: payload.page,
        total_pages: payload.total_pages,
        total_results: payload.total_pages
      };
      state.loadingShows = false;
      state.errorShows = null;
    },
    fetchingShowsError: (state, { payload }) => {
      state.shows = [];
      state.errorShows = payload;
      state.loadingShows = false;
    },
    setSearchQuery: (state, { payload }) => {
      state.searchQuery = payload;
    }
  },
  extraReducers: {}
});

export default slice.reducer;

const {
  fetchingShowsStarted,
  fetchingShowsSuccess,
  fetchingShowsError,
  setSearchQuery
  // reset
} = slice.actions;

export const showsSelector = (state) => state.shows;

// Get shows
export const getShows = ({ searchQuery, searchPage }) => async (dispatch) => {
  dispatch(fetchingShowsStarted());
  dispatch(setSearchQuery({ searchQuery, searchPage }));
  try {
    const res = await apiClient.get(
      `${SEARCH_ALL}&query=${searchQuery}&page=${searchPage}`
    );
    dispatch(fetchingShowsSuccess(res.data));
  } catch (e) {
    dispatch(fetchingShowsError(e.message));
  }
};
