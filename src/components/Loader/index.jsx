import React from "react";
import "./loader.css";
import { BsCircleFill } from "react-icons/bs";
import PropTypes from "prop-types";
function Loader({ variant = "normal" }) {
  return (
    <div className="loading__normal">
      {variant === "normal" &&
        [1, 2, 3].map((id) => (
          <span key={id}>
            <BsCircleFill />
          </span>
        ))}
      {variant === "simple" && <div className="loading__simple"></div>}
    </div>
  );
}

export default Loader;

Loader.propTypes = {
  /**
   * Type of loader
   */
  variant: PropTypes.oneOf(["normal", "simple"]),
};
Loader.defaultProps = {
  variant: "normal",
};
