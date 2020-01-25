import React from "react";
import PropTypes from "prop-types";
import { Link } from 'gatsby';

export const Button = ({ size, type, label, action, children }) => {
  return type === "disabled" ? (
    <button
      disabled
      type="button"
      className={`button ui button-${type} ${size}`}
      aria-label={label}
    >
      {children}
    </button>
  ) : (
    <button
      type="button"
      className={`button ui button-${type} ${size}`}
      aria-label={label}
      onClick={action}
    >
      {children}
    </button>
  );
};

export const LinkButton = ({size, type, label, to, children}) => {
  return (
    <Link 
      className={`button ui button-${type} ${size}`}
      aria-label={label}
      to={to}
    >
      {children}
    </Link>
  )
};

Button.propTypes = {
  size: PropTypes.oneOf(["icon", "medium", "large"]),
  type: PropTypes.oneOf([
    "primary",
    "secondary",
    "accent1",
    "accent2",
    "accent3",
    "disabled"
  ]).isRequired,
  label: PropTypes.string.isRequired,
  action: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired
};

Button.defaultProps = {
  size: "large",
  action: () => {}
};