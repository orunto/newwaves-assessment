import { createSlice } from "@reduxjs/toolkit";

export const participants = createSlice({
  name: "participant",
  initialState: {
    value: [
      {
        img: "./avatar.png",
        name: "Akanji J.",
        id: "active",
        video: './Others.png'
      },
      {
        img: "./avatar.png",
        name: "Debbie W",
        id: "",
        video: './You.png'
      },
      {
        img: "./avatar.png",
        name: "Samuel O",
        id: "",
        video: './You.png'
      },
    ],
  },
  reducers: {
    removeParticipant: (state, action) => {
      state.value.push(action.payload);
    },
    addParticipants: (state, action) => {
      delete state.value[action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { currentParticipants, removeParticipant, addParticipants } =
  participants.actions;

export default participants.reducer;
