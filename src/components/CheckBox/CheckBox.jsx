import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const CheckboxComponent = ({ input, label }) => (
  <div>
    <FormControlLabel
      control={<Checkbox checked={!!input.value} color="primary" onChange={input.onChange} />}
      label={label}
    />
  </div>
);
export default CheckboxComponent;
