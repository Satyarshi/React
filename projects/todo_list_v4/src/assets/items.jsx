// Items.jsx
import PropTypes from "prop-types";
import styles from "./Items.module.css";

const Items = ({ items }) => {
  return (
    <div className="container text-center">
      {items.map((item) => (
        <div key={item.name} className={`row ${styles["kg-button"]}`}>
          <div className="col">{item.name}</div>
          <div className="col">{item.date}</div>
          <div className="col">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

Items.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Items;
