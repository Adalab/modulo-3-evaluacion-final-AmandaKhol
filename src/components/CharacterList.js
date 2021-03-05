import React from 'react';
import PropTypes from 'prop-types';

import CharacterCard from './CharacterCard';
import '../stylesheets/components/_character-list.scss';

const CharacterList = (props) => {
  const characterElements = () => {
    return props.characters.map((character) => {
      return (
        <li key={character.id} className="character__item">
          <CharacterCard
            character={character}
            handleDetailCharacter={props.handleDetailCharacter}
          />
        </li>
      );
    });
  };

  return (
    <section className="characters">
      <ul
        className={`characters__list characters__list--${props.characters.length}`}
      >
        {characterElements()}
      </ul>
    </section>
  );
};

export default CharacterList;

CharacterList.propsTypes = {
  characters: PropTypes.array,
};
