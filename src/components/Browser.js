import React from 'react';
import Filter from './Filter';
import CharacterList from './CharacterList';

const Browser = (props) => {
  const renderCharacterList = () => {
    return props.characters.length !== 0 ? (
      <CharacterList
        characters={props.characters}
        handleDetailCharacter={props.handleDetailCharacter}
      />
    ) : (
      <p>
        No hay ningún personaje que coincida con la palabra:
        <span> {props.characterSelect}</span>
      </p>
    );
  };

  return (
    <section className="browser">
      <Filter handleSelect={props.handleSelect} inputValue={props.inputValue} />
      {renderCharacterList()}
    </section>
  );
};

export default Browser;
