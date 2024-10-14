// src/components/ChatWindow.jsx
import React, { useEffect, useRef } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { receiveMessage } from '../features/chatSlice';

const ChatWindow = () => {
  const messages = useSelector((state) => state.chat.messages);
  const dispatch = useDispatch();
  const chatEndRef = useRef(null);

  // Simulate receiving a message
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(receiveMessage({ text: 'Hello from AI!', user: 'Bot' }));
    }, 5000);

    return () => clearInterval(interval);
  }, [dispatch]);

  // Auto-scroll to the latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Box
      sx={{
        height: '60vh',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        p: 2,
      }}
    >
      {messages.map((msg, index) => (
        <Paper
          key={index}
          sx={{
            alignSelf: msg.user === 'User' ? 'flex-end' : 'flex-start',
            backgroundColor: msg.user === 'User' ? '#FF4500' : '#f5f5f5',
            color: msg.user === 'User' ? 'white' : 'black',
            p: 1,
            mb: 1,
            borderRadius: '10px',
          }}
        >
          <Typography>{msg.text}</Typography>
          <Typography variant="caption">{msg.timestamp}</Typography>
        </Paper>
      ))}
      <div ref={chatEndRef} />
    </Box>
  );
};

export default ChatWindow;
