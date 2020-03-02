import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({
  field, value, label, error, type, onChange, placeholder, disabled,
}) => (
  <span>
    <label className="active" htmlFor={label}>{label}</label>

    <input
      onChange={onChange}
      value={value}
      type={type}
      name={field}
      placeholder={placeholder}
      className="form-control validate"
      disabled={disabled}
    />
    {error && <span className="help-block invalid">{error}</span>}
  </span>
);

InputField.propTypes = {
  field: PropTypes.string,
  value: PropTypes.any,
  label: PropTypes.string,
  error: PropTypes.any,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  type: 'text',
  disabled: false,
};

export default InputField;
