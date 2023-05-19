import TextField from '@mui/material/TextField';
import RadioGroup from '../RadioGroup/RadioGroup';
import CheckBox from '../CheckBox/CheckBox';
import CheckBoxGroup from '../CheckBoxGroup/CheckBoxGroup';
import Select from '../SelectBox/SelectBox';

export const T = {
  TEXT: 'text',
  PASSWORD: 'password',
  NUMBER: 'number',
  EMAIL: 'email',
  RADIO_GROUP: 'radios',
  CHECKBOX: 'checkbox',
  CHECKBOX_GROUP: 'checkboxes',
  SELECTBOX: 'select',
  DATE: 'date'
};

export const getInputComponent = (inputType) => {
  switch (inputType) {
    case T.TEXT:
    case T.PASSWORD:
    case T.NUMBER:
    case T.EMAIL:
    case T.DATE:
      return TextField;
    case T.RADIO_GROUP:
      return RadioGroup;
    case T.CHECKBOX:
      return CheckBox;
    case T.CHECKBOX_GROUP:
      return CheckBoxGroup;
    case T.SELECTBOX:
      return Select;
    default:
      return TextField;
  }
};
