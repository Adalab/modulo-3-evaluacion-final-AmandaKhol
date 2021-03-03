import React from 'react';
import CharacterCard from './CharacterCard';
import '../stylesheets/layout/_character-list.scss';

const CharacterList = (props) => {
  const characterElements = () => {
    return props.characters.map((character) => {
      return (
        <li key={character.id}>
          <CharacterCard
            character={character}
            handleDetailCharacter={props.handleDetailCharacter}
          />
        </li>
      );
    });
  };

  return (
    <div>
      <ul className="character__list">{characterElements()}</ul>
    </div>
  );
};

export default CharacterList;
