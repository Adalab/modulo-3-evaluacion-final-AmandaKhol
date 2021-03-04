import React from 'react';
import PropTypes from 'prop-types';

const Warning = (props) => {
  const renderMsg = () => {
    if (props.warningCode === 204) {
      return (
        <p className="content__warning--message">
          No hay ningún personaje que coincida con la palabra:
          <span className="content__warning--span"> {props.inputValue}</span>
        </p>
      );
    } else if (props.warningCode === 400) {
      return (
        <p className="content__warning--message">
          El personaje que buscas no existe
        </p>
      );
    } else {
      return <p className="content__warning--message">Página no encontrada</p>;
    }
  };

  return <div className="content__warning">{renderMsg()}</div>;
};

export default Warning;

Warning.propTyes = {
  warningCode: PropTypes.number,
  inputValue: PropTypes.string,
};
