/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
import { Avatar, Input, Typography } from '@material-ui/core';
import EmojiPicker from 'emoji-picker-react';
import {
  AttachFile,
  InsertEmoticon,
  MoreVert,
  Search,
  Send,
} from '@material-ui/icons';
import { Box } from '@mui/material';
import './App.css';
import './ChatIntro.css';
import React, { useRef, useState } from 'react';
import { Close } from '@mui/icons-material';
import MessageItem from './MessageItem ';

interface UserProps {
  user: any;
}

export default function ChatWindow(props: UserProps) {
  const body = useRef();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [chosenEmoji, setChosenEmoji] = useState(false);
  const [text, setText] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [list, setList] = useState([
    {
      author: 123,
      body: 'bla bla bla bla bla bla bla bla',
    },
    {
      author: 123,
      body: 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla',
    },
    {
      author: 1234,
      body: 'bla bla bla bla',
    },
    {
      author: 123,
      body: 'bla bla bla bla bla bla bla bla',
    },
    {
      author: 123,
      body: 'bla bla bla bla bla bla bla bla',
    },
    {
      author: 123,
      body: 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla',
    },
    {
      author: 1234,
      body: 'bla bla bla bla',
    },
    {
      author: 123,
      body: 'bla bla bla bla bla bla bla bla',
    },
    {
      author: 123,
      body: 'bla bla bla bla bla bla bla bla',
    },
    {
      author: 123,
      body: 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla',
    },
    {
      author: 1234,
      body: 'bla bla bla bla',
    },
    {
      author: 123,
      body: 'bla bla bla bla bla bla bla bla',
    },
    {
      author: 123,
      body: 'bla bla bla bla bla bla bla bla',
    },
    {
      author: 123,
      body: 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla',
    },
    {
      author: 1234,
      body: 'bla bla bla bla',
    },
    {
      author: 123,
      body: 'bla bla bla bla bla bla bla bla',
    },
    {
      author: 123,
      body: 'bla bla bla bla bla bla bla bla',
    },
    {
      author: 123,
      body: 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla',
    },
    {
      author: 1234,
      body: 'bla bla bla bla',
    },
    {
      author: 123,
      body: 'bla bla bla bla bla bla bla bla',
    },
    {
      author: 123,
      body: 'bla bla bla bla bla bla bla bla',
    },
    {
      author: 123,
      body: 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla',
    },
    {
      author: 1234,
      body: 'bla bla bla bla',
    },
    {
      author: 123,
      body: 'bla bla bla bla bla bla bla bla',
    },
  ]);

  const onEmojiClick = (e: any, emojiObject: any) => {
    setText(text + emojiObject.emoji);
  };

  const handleOpenEmoji = () => {
    setChosenEmoji(true);
  };
  const handleCloseEmoji = () => {
    setChosenEmoji(false);
  };
  const handleSendClick = () => {};

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          height: '60px',
          borderBottom: '1px solid #CCC',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          <Box
            sx={{
              marginLeft: '15px',
              marginRight: '15px',
            }}
          >
            <Avatar
              alt="Kauê"
              src="https://image.pngaaa.com/345/1582345-middle.png"
            />
          </Box>
          <Box
            sx={{
              fontSize: '17px',
              color: '#000',
            }}
          >
            <Typography>Kauê</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginRight: '15px',
          }}
        >
          <Box
            sx={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <Search />
          </Box>
          <Box
            sx={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <AttachFile />
          </Box>
          <Box
            sx={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <MoreVert />
          </Box>
        </Box>
      </Box>

      {/* Body */}

      <Box ref={body} className="body_chat">
        {list.map((item, key) => (
          <MessageItem key={key} data={item} user={props.user} />
        ))}
      </Box>

      {/* Emoji Área */}
      <Box
        className="body_emoji"
        style={{ height: chosenEmoji ? '300px' : '0px' }}
      >
        <EmojiPicker
          pickerStyle={{ width: '100%' }}
          disableSearchBar
          disableSkinTonePicker
          onEmojiClick={onEmojiClick}
        />
      </Box>

      {/* Footer */}

      <Box
        sx={{
          height: '55px',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#dfdfdf',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            margin: '0 15px',
          }}
        >
          <Box
            sx={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              overflow: 'hidden',
              transition: 'all ease 0.3s',
            }}
            onClick={handleCloseEmoji}
            style={{ width: chosenEmoji ? 40 : 0 }}
          >
            <Close />
          </Box>

          <Box
            sx={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={handleOpenEmoji}
          >
            <InsertEmoticon
              style={{ color: chosenEmoji ? '#009688' : '#000' }}
            />
          </Box>
        </Box>
        <Box className="input_type">
          <Input
            placeholder="Digite uma mensagem"
            className="input_type_msg"
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            margin: '0 15px',
          }}
        >
          <Box
            sx={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={handleSendClick}
          >
            <Send />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
