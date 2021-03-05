import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/components/_character-card.scss';
import { Link } from 'react-router-dom';
import getIconSpecies from '../services/getIconSpecies';
import getIconStatus from '../services/getIconStatus';

const CharacterCard = (props) => {
  const { id, name, photo, species, status } = props.character;
  return (
    <Link to={`/detail/${id}`} className="character__item">
      <div className="character__item--header">
        <h3 className="character__item--title">{name}</h3>
        <h4 className="character__item--species">{species}</h4>
        <div className="character__item--icons">
          <span>{getIconStatus(status)}</span>
          <span>{getIconSpecies(species)}</span>
        </div>
      </div>
      <img
        className="character__item--image"
        src={photo}
        alt={name + ' photo'}
        title={name + ' photo'}
      />
    </Link>
  );
};

export default CharacterCard;

CharacterCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    species: PropTypes.string,
    photo: PropTypes.string,
    status: PropTypes.string,
  }),
};
