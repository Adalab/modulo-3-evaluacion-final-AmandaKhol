import React from 'react';
import '../stylesheets/components/_browser.scss';
import PropTypes from 'prop-types';

import Filter from './Filter';
import CharacterList from './CharacterList';
import Warning from './Warning';

const Browser = (props) => {
  const renderCharacterListOrWarning = () => {
    return props.characters.length !== 0 ? (
      <CharacterList characters={props.characters} />
    ) : (
      <Warning warningCode={204} inputValue={props.inputValue} />
    );
  };

  return (
    <section className="browser">
      <Filter
        handleSelect={props.handleSelect}
        handleReset={props.handleReset}
        handleLocation={props.handleLocation}
        inputValue={props.inputValue}
        species={props.species}
        speciesSelect={props.speciesSelect}
        locations={props.locations}
        locationSelect={props.locationSelect}
      />
      {renderCharacterListOrWarning()}
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
