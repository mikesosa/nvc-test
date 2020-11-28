import { createSlice } from '@reduxjs/toolkit';
import { ApiClientSingleton } from '../../utils';

const apiClient = ApiClientSingleton.getApiInstance();

const showsState = {
  shows: [],
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
      state.shows = payload;
      state.loadingShows = false;
      state.errorShows = null;
    },
    fetchingShowsError: (state, { payload }) => {
      state.shows = [];
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
  fetchingShowsError
  // reset
} = slice.actions;

// Get shows
export const getShows = () => async (dispatch) => {
  dispatch(fetchingShowsStarted());
  try {
    const res = await apiClient.get(`v1/cma/global-app-definitions`);
    const { items } = res.data;
    if (items.length) {
      dispatch(fetchingShowsSuccess(items));
    } else {
      dispatch(
        fetchingShowsError({
          message: 'No global app definitions'
        })
      );
    }
  } catch (e) {
    dispatch(fetchingShowsError(e));
  }
};
