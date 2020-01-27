import React from "react";
import PropTypes from "prop-types";
import Email from '../../../svg/Email.svg';
import Info from '../../../svg/Info.svg';

const ModalMessage = ({ theme, conditional, handleClose, children }) => {
  return (
    <div className={`modal-message ${theme}`}>
      {(theme === "accent2" || theme === "accent3") ? (<Info />) : (<Email />) }
      <p className="modal-message--display ui">{children}</p>
    </div>
  );
};

ModalMessage.propTypes = {
  theme: PropTypes.oneOf([
    'primary',
    'secondary',
    'accent1',
    'accent2',
    'accent3'
  ]).isRequired,
  conditional: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
}

export default ModalMessage;
