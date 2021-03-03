import React from 'react';
import Filter from './Filter';
import CharacterList from './CharacterList';
import '../stylesheets/components/_browser.scss';

const Browser = (props) => {
  const renderCharacterList = () => {
    return props.characters.length !== 0 ? (
      <CharacterList
        characters={props.characters}
        handleDetailCharacter={props.handleDetailCharacter}
      />
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
      <Filter handleSelect={props.handleSelect} inputValue={props.inputValue} />
      {renderCharacterList()}
    </section>
  );
};

export default Browser;
