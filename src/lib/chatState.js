import { createSlice } from '@reduxjs/toolkit'

export const chatState = createSlice({
  name: 'counter',
  initialState: {
    value: false
  },
  reducers: {
    chat: state => {
      state.value = true
    },
    nochat: state => {
      state.value = false
    },
    setChat: (state, action) => {
      state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { chat, nochat, setChat } = chatState.actions

export default chatState.reducer