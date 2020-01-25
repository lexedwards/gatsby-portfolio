import React from "react";
import PropTypes from "prop-types";
import MenuButton from "./molecules/atoms/MenuButton";
import { Link } from 'gatsby';

const MainNavigation = ({ pages }) => {
  return (
    <nav className="main-nav">
      <MenuButton />
      <ul className="main-nav--menu">
        {pages.map(({ name, url }) => {
          return (
            <li key={name} className="main-nav--item">
              <Link 
                className="link primary ui" 
                activeClassName="Secondary"
                to={url}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

MainNavigation.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string
    })
  ).isRequired
};

export default MainNavigation;
