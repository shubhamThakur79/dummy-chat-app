import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import MessageInput from './components/MessageInput';
import ChatWindow from './components/ChatWindow';

function App() {
  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" textAlign="center">
        Chat Interface
      </Typography>
      <Box sx={{ boxShadow: 3, borderRadius: 2, p: 3, backgroundColor: '#fff' }}>
        <ChatWindow />
        <MessageInput />
      </Box>
    </Container>
  );
}

export default App;
