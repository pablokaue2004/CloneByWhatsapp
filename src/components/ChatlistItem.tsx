/* eslint-disable @typescript-eslint/no-unused-vars */
import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';

interface InputProps {
  // eslint-disable-next-line react/no-unused-prop-types
  onClick: () => void;
  // eslint-disable-next-line react/no-unused-prop-types
  active: boolean;
}
// eslint-disable-next-line import/no-anonymous-default-export
// eslint-disable-next-line func-names
export default function (props: InputProps) {
  return (
    <Box
      // eslint-disable-next-line react/destructuring-assignment
      onClick={props.onClick}
      // eslint-disable-next-line react/destructuring-assignment
      className={`chatlist_${props.active ? 'active' : ''}`}
      sx={{
        display: 'flex',
        cursor: 'pointer',
        alignItems: 'center',
        height: '7vh',
      }}
    >
      <Avatar
        sx={{
          marginLeft: '15px',
          width: '50px',
          height: '50px',
        }}
        alt="Kauê"
        src="https://image.pngaaa.com/345/1582345-middle.png"
      />
      <Box
        sx={{
          flex: 1,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          borderBottom: '1px solid #EEE',
          paddingRight: '15px',
          marginLeft: '15px',

          flexWrap: 'wrap',
          minWidth: 0,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Typography sx={{ fontSize: '17px', color: '#000' }}>
            Kauêzin da Massa
          </Typography>
          <Typography sx={{ fontSize: '12px', color: '#999' }}>
            14:19
          </Typography>
        </Box>
        <Box
          sx={{
            fontSize: '14px',
            color: '#999',
            display: 'flex',
            width: '100%',
          }}
        >
          <Typography
            sx={{
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              margin: 0,
            }}
          >
            Eai princesa?
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
