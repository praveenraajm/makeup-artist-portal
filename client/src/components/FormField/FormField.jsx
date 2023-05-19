import React, { useState } from 'react';
import { getInputComponent } from './getInputComponent';
import './index.scss';
import { InputAdornment, IconButton, Tooltip } from '@mui/material';
import { Visibility, VisibilityOff, Add, Info } from '@mui/icons-material';

const FormField = (props) => {
  const { input, children, ...rest } = props;
  const [values, setValues] = useState({
    showPassword: false
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const showError = props.error && props.error !== '' && props.error !== null;

  const Component = getInputComponent(props.tstype);

  return (
    <div className={`mui-field`} style={{ display: 'flex' }}>
      {props.showLabel && <div className="mui-field-label">{props.formFieldLabel}</div>}
      <div className="mui-field-value" style={{ display: 'flex', alignItems: 'center' }}>
        <Component
          {...props}
          {...input}
          {...rest}
          {...children}
          id={props.inputId}
          onChange={props.onChange}
          type={
            props.tstype === 'password' ? (values.showPassword ? 'text' : 'password') : props.tstype
          }
          onInput={(e) =>
            props.tstype === 'number'
              ? (e.target.value = Math.max(0, parseInt(e.target.value))
                  .toString()
                  .slice(0, props.maxNumberLength))
              : {}
          }
          InputProps={{
            endAdornment: props.tstype === 'password' && (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )
          }}
          inputProps={{
            maxLength: props.maxLength
          }}
          helperText={showError ? props.error : props.helperText}
          disabled={props.disabled}
          defaultValue={props.value}
        />

        {props.helpText && <Tooltip title={props.helpText} placement="right-start" arrow>
          <Info className="help-text" />
        </Tooltip>}
        
        {props.footerLabel && (
          <div className="mui-field-footer-label" style={{ width: props.width }}>
            {props.footerLabel}
          </div>
        )}
      </div>
      {props.addLabel && (
        <div className="add-new-label" onClick={() => props.onClickAddNew(props.name)}>
          <Add /> Add New {props.addLabel}
        </div>
      )}
    </div>
  );
};

export default FormField;
