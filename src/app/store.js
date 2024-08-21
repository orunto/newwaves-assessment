import { configureStore } from '@reduxjs/toolkit'
import { chatMessages, chatPosition, DialogState, participants } from '../lib'

export default configureStore({
  reducer: {
    chat: chatPosition,
    participant: participants,
    messages: chatMessages,
    dialog: DialogState
  }
})