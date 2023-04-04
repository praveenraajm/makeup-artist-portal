import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const handleChange = (props) => (e) => {
  const { value } = e.target;
  const { onChange, selectedOptions } = props;
  const checkedValues = selectedOptions;
  if (checkedValues.includes(value)) {
    selectedOptions.map((item, index) => item === value && checkedValues.splice(index, item));
  } else {
    checkedValues.push(value);
  }
  onChange(checkedValues);
};

const CheckboxesGroup = (props) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    {props.options.map((item) => (
      <FormControlLabel
        key={item.id}
        control={<Checkbox />}
        label={item.label}
        value={item.value}
        checked={props[item.name] && props[item.name].includes(item.value)}
        onChange={handleChange(props)}
      />
    ))}
  </div>
);

export default CheckboxesGroup;
