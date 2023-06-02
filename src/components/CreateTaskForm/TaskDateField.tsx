import React, { FC, ReactElement } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TextField } from '@mui/material';
import { IDateField } from './interfaces/IDateField';
import PropTypes from 'prop-types';

const TaskDateField: FC<IDateField> = (props): ReactElement => {
  const {
    value = new Date(),
    onChange = date => {
      console.log(date);
    },
    disabled = false,
  } = props;

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label='Task Date'
          format='dd/MM/yyyy'
          value={value}
          disabled={disabled}
          onChange={onChange}
          // @ts-ignore
          renderInput={params => <TextField {...params} />}
        />
      </LocalizationProvider>
    </>
  );
};

export default TaskDateField;

TaskDateField.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.instanceOf(Date),
};
