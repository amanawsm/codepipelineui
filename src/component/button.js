import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap'

const ButtonField = ({
  className, type, label, onClick, disabled,
}) => (
    <Button
      className={className}
      type={type}
      name="action"
      onClick={onClick}
      disabled={disabled}
      variant="primary"
    >
      {label}
    </Button>
  );

ButtonField.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

ButtonField.defaultProps = {
  disabled: false,
  className: '',
  type: 'submit',
  onClick: () => { },
};

export default ButtonField;
