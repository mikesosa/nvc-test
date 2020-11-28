import { createSlice } from '@reduxjs/toolkit';
// import { ApiClientSingleton } from '../../utils';

// const apiClient = ApiClientSingleton.getApiInstance();

const showsState = {
  loadingShows: false,
  errorShows: null,
  currentRequestId: undefined
};

const slice = createSlice({
  name: 'shows',
  initialState: showsState,
  reducers: {},
  extraReducers: {}
});

export default slice.reducer;
