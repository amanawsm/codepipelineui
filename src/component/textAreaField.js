import React from 'react';
import PropTypes from 'prop-types';

const TextAreaField = ({
  field, value, label, error, type, onChange, placeholder, disabled,
}) => (
  <span>
    <label className="active" htmlFor={label}>{label}</label>

    <textarea
      onChange={onChange}
      value={value}
      type={type}
      name={field}
      placeholder={placeholder}
      className="form-control validate"
      disabled={disabled}
    />

    {error && <span className="help-block invalid ">{error}</span>}
  </span>
);

TextAreaField.propTypes = {
  field: PropTypes.string,
  value: PropTypes.any,
  label: PropTypes.string,
  error: PropTypes.any,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

TextAreaField.defaultProps = {
  type: 'text',
  disabled: false,
};

export default TextAreaField;
