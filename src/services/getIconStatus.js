const iconAlive = <i className="fas fa-heartbeat"></i>;
const iconDead = <i className="fas fa-dizzy"></i>;
const iconUnknown = <i className="fas fa-question-circle"></i>;

const getIconStatus = (status) => {
  if (status.toLowerCase() === 'alive') {
    return iconAlive;
  } else if (status.toLowerCase() === 'dead') {
    return iconDead;
  } else {
    return iconUnknown;
  }
};

export default getIconStatus;
