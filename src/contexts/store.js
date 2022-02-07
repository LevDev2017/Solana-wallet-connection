import { configureStore } from '@reduxjs/toolkit'
import Walletslice from './walletslice'
import DetailSlice from './detailSlice'

export default configureStore({
  reducer: {
      wallet : Walletslice,
      detail : DetailSlice
  },
})