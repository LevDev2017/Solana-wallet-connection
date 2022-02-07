import { createSlice } from '@reduxjs/toolkit'
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    isConnected:false,
    publicKey : "",
  },
  reducers: {
    login: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isConnected = true
    },
    exit: (state) => {
      state.isConnected = false
    },
    setPublicKey: (state, action) => {
      state.publicKey = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, exit, setPublicKey } = counterSlice.actions

export default counterSlice.reducer