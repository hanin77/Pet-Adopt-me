import React from "react";
import PropTypes from "prop-types";
const Pet = ({ name, animal, breed }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{animal}</h1>
      <h1>{breed}</h1>
    </div>
  );
};
Pet.propTypes = {
  name: PropTypes.string,
  animal: PropTypes.string,
  breed: PropTypes.string,
};
export default Pet;
