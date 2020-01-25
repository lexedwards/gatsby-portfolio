import React from "react";
import PropTypes from "prop-types";

const Status = ({ statusKey, statusValue }) => {
  const Value =
    typeof statusValue === "number" ? `v${statusValue}` : statusValue;

  return (
    <div className="status">
      <div className="status-key">
        <p>{statusKey}</p>
      </div>
      <div className="status-value">
        <p>{Value}</p>
      </div>
    </div>
  );
};

Status.propTypes = {
  statusKey: PropTypes.string.isRequired,
  statusValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired
};

Status.defaultProps = {};

export default Status;
