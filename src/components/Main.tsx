import React, { useState } from 'react';
import './App.css';
import { Avatar, Box } from '@material-ui/core';
import { Comment, MoreVert, Search } from '@mui/icons-material';
import { TextField } from '@mui/material';

import ChatlistItem from './ChatlistItem';
import ChatIntro from './ChatIntro';
import ChatWindow from './ChatWindow';
import NewChat from './NewChat';

type activeTypeChat = {
  chatId: number;
  title: string;
  image: string;
};

function Main() {
  const [chatlist] = useState([
    {
      chatId: 1,
      title: 'Kauê',
      image: 'https://image.pngaaa.com/345/1582345-middle.png',
    },
    {
      chatId: 2,
      title: 'Kauê',
      image: 'https://image.pngaaa.com/345/1582345-middle.png',
    },
    {
      chatId: 3,
      title: 'Kauê',
      image: 'https://image.pngaaa.com/345/1582345-middle.png',
    },
    {
      chatId: 4,
      title: 'Kauê',
      image: 'https://image.pngaaa.com/345/1582345-middle.png',
    },
    {
      chatId: 5,
      title: 'Kauê',
      image: 'https://image.pngaaa.com/345/1582345-middle.png',
    },
    {
      chatId: 6,
      title: 'Kauê',
      image: 'https://image.pngaaa.com/345/1582345-middle.png',
    },
    {
      chatId: 7,
      title: 'Kauê',
      image: 'https://image.pngaaa.com/345/1582345-middle.png',
    },
    {
      chatId: 8,
      title: 'Kauê',
      image: 'https://image.pngaaa.com/345/1582345-middle.png',
    },
    {
      chatId: 9,
      title: 'Kauê',
      image: 'https://image.pngaaa.com/345/1582345-middle.png',
    },
  ]);
  const [activeChat, setActiveChat] = useState<activeTypeChat>();
  const [showNewChat, setShowNewChat] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useState({
    id: 1234,
    avatar:
      'https://cdn2.vectorstock.com/i/1000x1000/38/21/male-face-avatar-logo-template-pictograph-vector-11333821.jpg',
    name: 'Kauê',
  });

  const handleNewChat = () => {
    setShowNewChat(true);
  };

  return (
    <>
      <NewChat
        // chatlist={chatlist}
        // user={user}
        show={showNewChat}
        setShow={setShowNewChat}
      />
      <Box
        sx={{
          width: '35%',
          maxWidth: '415px',
          display: 'flex',
          flexDirection: 'column',
          borderRight: '1px solid #a2a2a2',
        }}
      >
        {/* Header */}
        <Box
          sx={{
            height: '60px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 15px',
          }}
        >
          <Avatar style={{ cursor: 'pointer' }} alt="Kauê" src={user.avatar} />

          {/* Header Buttons */}
          <Box sx={{ display: 'flex' }}>
            <Box
              onClick={handleNewChat}
              style={{ cursor: 'pointer' }}
              sx={{
                width: '40px',
                height: '40px',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Comment sx={{ color: '#000' }} />
            </Box>
            <Box
              style={{ cursor: 'pointer' }}
              sx={{
                width: '40px',
                height: '40px',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <MoreVert sx={{ color: '#000' }} />
            </Box>
          </Box>
        </Box>

        {/* Search */}
        <Box className="search">
          <Box className="searchInput">
            <Search sx={{ color: '#323640' }} />
            <TextField
              sx={{ flex: '1' }}
              type="search"
              placeholder="Procurar ou iniciar conversa"
              variant="standard"
            />
          </Box>
        </Box>

        {/* Chatlist */}
        <Box className="chatlist">
          {chatlist.map((item, key) => (
            <ChatlistItem
              // eslint-disable-next-line react/no-array-index-key
              key={key}
              active={activeChat?.chatId === chatlist[key].chatId}
              onClick={() => {
                setActiveChat(chatlist[key]);
              }}
            />
          ))}
        </Box>
      </Box>

      {/* ContentArea */}

      <Box sx={{ flex: 1 }}>
        {activeChat?.chatId !== undefined && <ChatWindow user={user} />}
        {activeChat?.chatId === undefined && <ChatIntro />}

        {/* <ChatIntro /> */}
      </Box>
    </>
  );
}

export default Main;
