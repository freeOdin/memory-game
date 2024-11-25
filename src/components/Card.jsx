// src/components/Card.jsx
import PropTypes from 'prop-types';

const Card = ({ icon, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      {icon}
    </div>
  );
};

Card.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Card;
