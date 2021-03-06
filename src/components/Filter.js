import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/components/_filter.scss';
import Reset from './Reset';

const Filter = (props) => {
  const handleChange = (ev) => {
    return props.handleSelect(ev.target.id, ev.target.value);
  };

  const handleCheck = (ev) => {
    return props.handleLocation(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const renderLocationsOptions = () => {
    return props.locations.map((location, index) => {
      return (
        <label key={index} className="input-location">
          <input
            type="checkbox"
            name="location"
            value={location}
            onChange={handleCheck}
            checked={props.locationSelect.includes(location)}
          />
          {location}
        </label>
      );
    });
  };

  const renderSpeciesOptions = () => {
    return props.species.map((species, index) => {
      return (
        <option key={index} value={species}>
          {species}
        </option>
      );
    });
  };
  return (
    <section className="form-section">
      <form className="form" action="" onSubmit={handleSubmit}>
        <fieldset className="form__fieldset">
          <label htmlFor="character">Search a character:</label>
          <input
            className="form__input"
            id="character"
            type="text"
            value={props.inputValue}
            onChange={handleChange}
            placeholder="Name..."
          />
        </fieldset>

        <fieldset className="form__fieldset">
          <label htmlFor="species">Select the species:</label>
          <select
            className="form__select"
            name="species"
            id="species"
            onChange={handleChange}
            value={props.speciesSelect}
          >
            <option value="all">-</option>
            {renderSpeciesOptions()}
          </select>
        </fieldset>
        <fieldset>
          <label htmlFor="location">Select the location:</label>
          {renderLocationsOptions()}
        </fieldset>
      </form>
      <Reset handleReset={props.handleReset} />
    </section>
  );
};

export default Filter;

Filter.propTypes = {
  handleSelect: PropTypes.func,
  inputValue: PropTypes.string,
  species: PropTypes.array,
};
