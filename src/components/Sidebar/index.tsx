import { Grid } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import Profile from '../Profile';
import CreateTaskForm from '../CreateTaskForm';

const Sidebar: FC = (): ReactElement => {
  return (
    <Grid
      item
      md={4}
      sx={{
        height: '100vh',
        position: 'fixed',
        right: 0,
        top: 0,
        width: '100%',
        backgroundColor: 'background.paper',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Profile name='Marry' />
      <CreateTaskForm />
    </Grid>
  );
};

export default Sidebar;
