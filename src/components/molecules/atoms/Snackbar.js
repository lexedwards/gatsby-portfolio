import React from "react";
import PropTypes from "prop-types";

const Snackbar = ({ message, buttonLabel, action }) => {
  return (
    <div className="snackbar">
      <p className="ui snackbar--message">{message}</p>
      <button
        type="button"
        className="action ui"
        aria-label={buttonLabel}
        onClick={action}
      >
        {buttonLabel}
      </button>
    </div>
  );
};

Snackbar.propTypes = {
  message: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  action: PropTypes.func
};

Snackbar.defaultProps = {
  action: () => {}
};

export default Snackbar;
