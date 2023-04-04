import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const mapRadioButton = (props) => (item) =>
  (
    <FormControlLabel
      value={item.value}
      disabled={item.disabled}
      control={<Radio size="small" className={props.className} />}
      label={item.label}
    />
  );

const RadioButtonsGroup = (props) => (
  <RadioGroup {...props}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {props.options && props.options.map(mapRadioButton(props))}
    </div>
  </RadioGroup>
);
export default RadioButtonsGroup;
