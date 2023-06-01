import { TextField } from '@mui/material';
import React, { FC, ReactElement } from 'react';

const TaskDescriptionField: FC = (): ReactElement => {
  return (
    <TextField
      id='description'
      name='description'
      label='Description'
      placeholder='Description'
      variant='outlined'
      size='small'
      multiline
      rows={4}
      fullWidth
    />
  );
};

export default TaskDescriptionField;
