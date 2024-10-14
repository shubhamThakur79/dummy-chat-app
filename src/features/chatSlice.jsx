// src/features/chatSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      state.messages.push({ ...action.payload, user: 'User', timestamp: new Date().toLocaleTimeString() });
    },
    receiveMessage: (state, action) => {
      state.messages.push({ ...action.payload, timestamp: new Date().toLocaleTimeString() });
    },
  },
});

export const { sendMessage, receiveMessage } = chatSlice.actions;
export default chatSlice.reducer;
