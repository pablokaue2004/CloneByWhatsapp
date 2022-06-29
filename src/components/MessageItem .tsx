/* eslint-disable react/destructuring-assignment */
import { Box } from '@material-ui/core';
import './App.css';
import React from 'react';

interface DataProps {
  data: any;
  user: any;
}

export default function (props: DataProps) {
  return (
    <Box
      sx={{
        marginBottom: '10px',
        display: 'flex',
      }}
      style={{
        justifyContent:
          props.user.id === props.data.author ? 'flex-end' : 'flex-start',
      }}
      className="messageLine"
    >
      <Box
        sx={{
          borderRadius: '10px',
          boxShadow: '0 1px 2px #aaa',
          display: 'flex',
          flexDirection: 'column',
          padding: '3x',
          maxWidth: '80%',
        }}
        className="messageItem"
        style={{
          backgroundColor:
            props.user.id === props.data.author ? '#CCCCCC' : '#fff',
        }}
      >
        <Box
          sx={{
            fontSize: '14px',
            margin: '5px 40px 5px 5px',
          }}
        >
          {props.data.body}
        </Box>
        <Box
          sx={{
            fontSize: '11px',
            color: '#999',
            marginRight: '5px',
            textAlign: 'right',
            marginTop: '-15px',
          }}
        >
          19:00
        </Box>
      </Box>
    </Box>
  );
}
