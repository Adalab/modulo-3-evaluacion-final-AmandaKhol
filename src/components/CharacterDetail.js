import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/components/_character-detail.scss';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  const renderIcon = () => {
    if (props.character.status.toLowerCase() === 'alive') {
      return <i className="fas fa-heartbeat"></i>;
    } else if (props.character.status.toLowerCase() === 'dead') {
      return <i className="fas fa-dizzy"> </i>;
    } else {
      return <i className="fas fa-question-circle"> </i>;
    }
  };
  return (
    <section className="detail">
      <Link className="detail__return" to="/">
        <i className="detail__return--icon fas fa-angle-left"></i> Volver
      </Link>
      <div className="detail__card">
        <div className="detail__card--info">
          <h3>{props.character.name}</h3>
          <h4>
            Status:
            <span className="detail__card--span">
              {props.character.status} - {renderIcon()}
            </span>
          </h4>
          <h4>
            Species:
            <span className="detail__card--span">
              {props.character.species}
            </span>
          </h4>
          <h4>
            Origin:
            <span className="detail__card--span">
              {' '}
              {props.character.origin}
            </span>
          </h4>
          <h4>
            Episodes:
            <span className="detail__card--span">
              {props.character.episodes}
            </span>
          </h4>
        </div>
        <img
          className="detail__card--photo"
          src={props.character.photo}
          alt={props.character.name + ' photo'}
          title={props.character.name + ' photo'}
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
