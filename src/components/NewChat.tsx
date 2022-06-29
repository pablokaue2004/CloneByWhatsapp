/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-array-index-key */
import { Box } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import './App.css';
import React, { useState } from 'react';
import { Avatar } from '@mui/material';

interface NewChat {
  // user: any;
  // chatlist: any;
  show: boolean;
  setShow: any;
}

export default function (props: NewChat) {
  const [listContato, setListContato] = useState([
    {
      id: 123,
      avatar: 'https://image.pngaaa.com/345/1582345-middle.png',
      name: 'Kauê',
    },
    {
      id: 123,
      avatar: 'https://image.pngaaa.com/345/1582345-middle.png',
      name: 'Kauê',
    },
    {
      id: 123,
      avatar: 'https://image.pngaaa.com/345/1582345-middle.png',
      name: 'Kauê',
    },
    {
      id: 123,
      avatar: 'https://image.pngaaa.com/345/1582345-middle.png',
      name: 'Kauê',
    },
  ]);

  const handleClose = () => {
    props.setShow(false);
  };

  return (
    <Box style={{ left: props.show ? 0 : -415 }} className="newChat">
      <Box
        sx={{
          display: 'flex',
          bgcolor: '#00bfa5',
          alignItems: 'center',
          padding: '60px 15px 15px 15px',
        }}
      >
        <Box
          onClick={handleClose}
          style={{ cursor: 'pointer' }}
          sx={{
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}
        >
          <ArrowBack />
        </Box>
        <Box
          sx={{
            fontSize: '19px',
            height: '40px',
            lineHeight: '40px',
            flex: 1,
            fontWeight: 'bold',
            color: 'white',
            marginLeft: '20px',
          }}
        >
          Nova conversa
        </Box>
      </Box>
      <Box className="list_newchat">
        {listContato.map((item, key) => {
          <Box
            style={{ cursor: 'pointer' }}
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: '15px',
            }}
            key={key}
          >
            <Avatar
              sx={{
                marginRight: '15px',
                width: '50px',
                height: '50px',
              }}
              src={item.avatar}
            />
            <Box
              sx={{
                fontSize: '17px',
                color: '#000',
              }}
            >
              {item.name}
            </Box>
          </Box>;
        })}
      </Box>
    </Box>
  );
}
