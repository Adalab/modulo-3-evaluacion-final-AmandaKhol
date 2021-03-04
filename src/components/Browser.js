import React from 'react';
import '../stylesheets/components/_browser.scss';
import PropTypes from 'prop-types';

import Filter from './Filter';
import CharacterList from './CharacterList';

const Browser = (props) => {
  const renderCharacterList = () => {
    return props.characters.length !== 0 ? (
      <CharacterList characters={props.characters} />
    ) : (
      <div className="content__warning">
        <p className="content__warning--message">
          No hay ningún personaje que coincida con la palabra:
          <span className="content__warning--span"> {props.inputValue}</span>
        </p>
      </div>
    );
  };

  return (
    <section className="browser">
      <Filter
        handleSelect={props.handleSelect}
        inputValue={props.inputValue}
        species={props.species}
      />
      {renderCharacterList()}
    </section>
  );
};

export default Browser;

Browser.propTypes = {
  inputValue: PropTypes.string,
  characters: PropTypes.array,
  handleSelect: PropTypes.func,
  species: PropTypes.array,
};
