import React from 'react';
import '../stylesheets/components/_filter.scss';

const Filter = (props) => {
  const handleChange = (ev) => {
    return props.handleSelect(ev.target.value);
  };
  return (
    <div>
      <form className="form" action="">
        <label htmlFor="character"></label>
        <input
          className="form__input"
          id="character"
          type="text"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Filter;
