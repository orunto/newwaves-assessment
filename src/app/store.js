import { configureStore } from '@reduxjs/toolkit'
import { chatState, participants } from '../lib'

export default configureStore({
  reducer: {
    chat: chatState,
    participant: participants
  }
})