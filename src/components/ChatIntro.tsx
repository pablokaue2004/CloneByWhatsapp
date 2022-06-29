import { Avatar, Box } from '@mui/material';
import React from 'react';
import './ChatIntro.css';

export default function ChatIntro() {
  return (
    <Box className="chatIntro">
      <Avatar
        sx={{
          marginLeft: '15px',
          width: '20vw',
          height: '40vh',
        }}
        alt="Kauê"
        src="https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg"
      />

      <h1>Agora você está conectado!</h1>
      <h2>Inicie uma conversa com algum dos seus contatos</h2>
    </Box>
  );
}
