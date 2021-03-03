import React from 'react';
import Filter from './Filter';
import CharacterList from './CharacterList';

const Browser = (props) => {
  return (
    <section className="browser">
      {' '}
      <Filter handleSelect={props.handleSelect} />
      <CharacterList
        characters={props.characters}
        handleDetailCharacter={props.handleDetailCharacter}
      />
    </section>
  );
};

export default Browser;
