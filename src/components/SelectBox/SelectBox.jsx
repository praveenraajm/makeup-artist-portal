import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  formControl: {
    minWidth: 240,
    width: window.innerWidth - 30
  }
}));

const mapSelectOptions = () => (item) => <MenuItem value={item.value}>{item.label}</MenuItem>;

const SelectBox = (props) => {
  const classes = useStyles();
  return (
    <FormControl
      className={classes.formControl}
      disabled={props.disabled}
      error={props.error}
      style={props.style}
      variant={props.variant}
      size="small"
    >
      <InputLabel>{props.label}</InputLabel>
      <Select
        error={props.error}
        disabled={props.disabled}
        label={props.label}
        value={props.value}
        onChange={props.onChange}
      >
        {props.options && props.options.map(mapSelectOptions())}
      </Select>
    </FormControl>
  );
};
export default SelectBox;
