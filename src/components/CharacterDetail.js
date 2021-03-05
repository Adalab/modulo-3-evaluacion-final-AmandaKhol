import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/components/_character-detail.scss';
import { Link } from 'react-router-dom';
import getIconSpecies from '../services/getIconSpecies';
import getIconStatus from '../services/getIconStatus';

const CharacterDetail = (props) => {
  const { name, species, status, photo, origin, episodes } = props.character;

  return (
    <section className="detail">
      <Link className="detail__return" to="/">
        <i className="detail__return--icon fas fa-angle-left"></i> Volver
      </Link>
      <div className="detail__card">
        <div className="detail__card--info">
          <h3>{name}</h3>
          <h4>
            Status:
            <span className="detail__card--span">
              {status} - {getIconStatus(status)}
            </span>
          </h4>
          <h4>
            Species:
            <span className="detail__card--span">
              {species} - {getIconSpecies(species)}
            </span>
          </h4>
          <h4>
            Origin:
            <span className="detail__card--span"> {origin}</span>
          </h4>
          <h4>
            Episodes:
            <span className="detail__card--span">{episodes}</span>
          </h4>
        </div>
        <img
          className="detail__card--photo"
          src={photo}
          alt={name + ' photo'}
          title={name + ' photo'}
        />
      </div>
    </section>
  );
};

export default CharacterDetail;

CharacterDetail.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    status: PropTypes.string,
    origin: PropTypes.string,
    episodes: PropTypes.number,
    species: PropTypes.string,
    photo: PropTypes.string,
  }),
};
