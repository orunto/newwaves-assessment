import { createSlice } from '@reduxjs/toolkit'

export const chatPosition = createSlice({
  name: 'chat',
  initialState: {
    value: '-40%'
  },
  reducers: {
    chat: state => {
      state.value = '39px'
    },
    nochat: state => {
      state.value = '-40%'
    },
  }
})

// Action creators are generated for each case reducer function
export const { chat, nochat } = chatPosition.actions

export default chatPosition.reducer