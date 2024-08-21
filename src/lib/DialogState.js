import { createSlice } from '@reduxjs/toolkit'

export const DialogState = createSlice({
  name: 'dialog',
  initialState: {
    value: false
  },
  reducers: {
    dialog: state => {
      state.value = !state.value
    },
  }
})

// Action creators are generated for each case reducer function
export const { dialog, nodialog } = DialogState.actions

export default DialogState.reducer