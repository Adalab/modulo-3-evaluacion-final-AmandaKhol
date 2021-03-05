const iconHuman = <i className="fas fa-user"></i>;
const iconAlien = <i className="fas fa-meteor"></i>;

const getIconSpecies = (species) => {
  return species.toLowerCase() === 'human' ? iconHuman : iconAlien;
};

export default getIconSpecies;
