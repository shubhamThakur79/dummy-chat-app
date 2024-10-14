// src/components/MessageInput.jsx
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../features/chatSlice';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleSend = () => {
    if (message.trim()) {
      dispatch(sendMessage({ text: message }));
      setMessage('');
    }
  };

  return (
    <Box sx={{ display: 'flex', mt: 2 }}>
      <TextField
        fullWidth
        variant="outlined"
        label="Type a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSend} sx={{ ml: 2 }}>
        Send
      </Button>
    </Box>
  );
};

export default MessageInput;
