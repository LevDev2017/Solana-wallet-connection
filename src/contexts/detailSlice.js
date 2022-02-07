import { createSlice } from '@reduxjs/toolkit'
export const detailSlice = createSlice({
  name: 'data',
  initialState: {
    data: []
  },
  reducers: {
    setDetailData: (state, action) => {
      state.data = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setDetailData } = detailSlice.actions

export default detailSlice.reducer