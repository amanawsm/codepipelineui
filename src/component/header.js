import React from 'react';
import { PropTypes } from 'prop-types';

const Heading = ({ headingName }) => (
  <h1>
    {headingName}
  </h1>
);

Heading.propTypes = {
  headingName: PropTypes.string,
};

export default Heading;
