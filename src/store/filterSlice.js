const { createSlice } = require('@reduxjs/toolkit');
const { initialState } = require('./initialState');

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState.filter,
  reducers: {
    setFilter(state, { payload }) {
      return payload;
    },
  },
});
export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
