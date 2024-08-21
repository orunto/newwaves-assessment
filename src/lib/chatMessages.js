import { createSlice } from '@reduxjs/toolkit'

export const chatMessages = createSlice({
  name: 'messages',
  initialState: {
    value: [
      {
        body: 'Heyyy',
        type: 'general',
        time: '2:12pm',
        sender: 'You'
      },
      {
        body: 'What’s up\nHow’s it going? \nCan we discuss how the data is being provided to the clients on an "as is" and "where-is" basis.',
        type: 'general',
        time: '2:12pm',
        sender: 'Debbie W'
      },
      {
        body: 'Heyyy\nWhat’s up\nHow’s it going?\nCan we discuss how the data is being provided to the clients on an "as is" and "where-is" basis.',
        type: 'private',
        time: '2:12pm',
        sender: 'Femi W'
      },
    ]
  },
  reducers: {
    newmessage: (state, action) => {
      state.value.push(action.payload)
    }
  }
})

// Action creators are generated for each case reducer function
export const { newmessage } = chatMessages.actions

export default chatMessages.reducer