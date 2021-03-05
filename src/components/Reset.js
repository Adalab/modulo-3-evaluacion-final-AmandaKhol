import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/components/_reset.scss';

const Reset = (props) => {
  const handleReset = () => {
    props.handleReset();
  };
  return (
    <button className="reset-btn" type="button" onClick={handleReset}>
      Reset
    </button>
  );
};

export default Reset;

Reset.propTypes = {
  handleReset: PropTypes.func,
};
