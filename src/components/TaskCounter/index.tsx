import { Box, Typography, Avatar } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { ITaskCounter } from './interfaces/ITaskCounter';
import { Status } from '../CreateTaskForm/enums/Status';
import { emitCorrectBorderColor } from './helpers/emitCorrectBorderColor';

const TaskCounter: FC<ITaskCounter> = (props): ReactElement => {
  const { count = 0, status = Status.todo } = props;
  return (
    <>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
      >
        <Avatar
          sx={{
            backgroundColor: 'transparent',
            border: '5px solid',
            width: '96px',
            height: '96px',
            marginBottom: '16px',
            borderColor: `${emitCorrectBorderColor(status)}`
          }}
        >
          <Typography color='#ffffff' variant='h4'>
            {count}
          </Typography>
        </Avatar>
        <Typography
          color='#ffffff'
          fontWeight='bold'
          fontSize='20px'
          variant='h5'
        >
          {status}
        </Typography>
      </Box>
    </>
  );
};

export default TaskCounter;
