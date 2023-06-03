import React, { FC, ReactElement } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { ISelectField } from './interfaces/ISelectField';
import PropTypes from 'prop-types';

const TaskSelectField: FC<ISelectField> = (props): ReactElement => {
  const {
    value = '',
    label = 'Select Box',
    name = 'selectbox',
    items = [{ value: '', label: 'Add Items' }],
    disabled = false,
    onChange = e => console.log(e),
  } = props;
  return (
    <FormControl fullWidth size='small'>
      <InputLabel id={`${name}-id`}>{label}</InputLabel>
      <Select
        labelId={`${name}-id`}
        id={`${name}-id-select`}
        value={value}
        label={label}
        name={name}
        onChange={onChange}
        disabled={disabled}
      >
        {items.map(({ value, label }, index) => (
          <MenuItem value={value} key={value + index}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
TaskSelectField.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

export default TaskSelectField;
