import React from 'react';
import TextField from '@mui/material/TextField';
import { Field } from 'redux-form';
import './index.scss';

const FormGroup = (props) => (
  <div className={`form-group ${props.className ? props.className : ''}`}>{props.children}</div>
);

const DefaultInputComponent = (props) => {
  return <TextField {...props} />;
};

export const FieldDecorations = (props) => {
  const inputName = props.input.name;
  const id = 'decoratedField_' + inputName;
  const { touched, error } = props.meta;
  const customError = props.customError;
  const FormField = props.inputcomponent || DefaultInputComponent;
  const value =
    props.tstype === 'slider' && props.range
      ? Array.isArray(props.input.value)
        ? props.input.value
        : [0]
      : props.input.value;
  return (
    <FormGroup className={props.className}>
      <FormField
        htmlFor={id}
        {...props}
        {...props.input}
        type={props.tstype}
        format={props.dateFormat}
        value={value}
        error={touched ? (error || customError) : null}
      />
    </FormGroup>
  );
};

const DecoratedField = (props) => (
  <Field validate={props.validate} key={props.name} {...props} component={FieldDecorations} />
);

export default DecoratedField;
