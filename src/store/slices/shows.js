import { createSlice } from '@reduxjs/toolkit';
import { SEARCH_ALL, API_KEY, API_BASE_URL } from '../../utils/constants';
import { ApiClientSingleton } from '../../utils';

const apiClient = ApiClientSingleton.getApiInstance();

const showsState = {
  shows: [],
  pages: {},
  seasonDetail: null,
  showDetail: null,
  selectedShow: null,
  searchQuery: '',
  loadingShows: false,
  errorShows: null,
  currentRequestId: undefined
};

const slice = createSlice({
  name: 'shows',
  initialState: showsState,
  reducers: {
    setSelected: (state, { payload }) => {
      state.selectedShow = payload;
    },
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
    },
    fetchingDetailStarted: (state) => {
      state.loadingShows = true;
    },
    fetchingDetailSuccess: (state, { payload }) => {
      state.showDetail = payload;
      state.loadingShows = false;
      state.errorShows = null;
    },
    fetchingDetailError: (state, { payload }) => {
      state.showDetail = null;
      state.errorShows = payload;
      state.loadingShows = false;
    },
    fetchingSeasonStarted: (state) => {
      state.loadingShows = true;
    },
    fetchingSeasonSuccess: (state, { payload }) => {
      state.seasonDetail = payload;
      state.loadingShows = false;
      state.errorShows = null;
    },
    fetchingSeasonError: (state, { payload }) => {
      state.seasonDetail = null;
      state.errorShows = payload;
      state.loadingShows = false;
    }
  },
  extraReducers: {}
});

export default slice.reducer;

const {
  fetchingShowsStarted,
  fetchingShowsSuccess,
  fetchingShowsError,
  setSearchQuery,
  fetchingDetailStarted,
  fetchingDetailSuccess,
  fetchingDetailError,
  fetchingSeasonStarted,
  fetchingSeasonError,
  fetchingSeasonSuccess,
  setSelected
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

export const getDetail = ({ showId, mediaType }) => async (dispatch) => {
  dispatch(fetchingDetailStarted());
  try {
    const res = await apiClient.get(
      `${API_BASE_URL}/${mediaType}/${showId}?api_key=${API_KEY}&external_source=imdb_id`
    );
    dispatch(fetchingDetailSuccess(res.data));
  } catch (e) {
    dispatch(fetchingDetailError(e.message));
  }
};

export const getSeason = ({ tvId, seasonNumber }) => async (dispatch) => {
  dispatch(fetchingSeasonStarted());
  try {
    const res = await apiClient.get(
      `${API_BASE_URL}/tv/${tvId}/season/${seasonNumber}?api_key=${API_KEY}`
    );
    dispatch(fetchingSeasonSuccess(res.data));
  } catch (e) {
    dispatch(fetchingSeasonError(e.message));
  }
};

export const setSelectedShow = (payload) => async (dispatch) => {
  dispatch(setSelected(payload));
};
