import React from "react";
import PropTypes from "prop-types";
const Pet = (props) => {
  const { name, animal, breed, media, location, id } = props;

  let hero = "http://placecorgi.com/300/300";
  if (media.length) {
    hero = media[0].small;
  }

  return (
    <a href={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </a>
  );
};

Pet.propTypes = {
  name: PropTypes.string,
  animal: PropTypes.string,
  breed: PropTypes.string,
  media: PropTypes.array,
  location: PropTypes.string,
  id: PropTypes.number,
};
export default Pet;
