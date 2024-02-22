import PropTypes from "prop-types";

const Empty = ({ fooditems }) => {
  return <>{fooditems.length === 0 && <h5>I am still hungry</h5>}</>;
};

Empty.propTypes = {
  fooditems: PropTypes.array.isRequired,
};

export default Empty;
