/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "../styles/main.scss";
import MainNavigation from "./MainNavigation";

const Layout = ({ children }) => {

  const pages = [
    { name: "home", url: "/" },
    {
      name: "about",
      url: "about/"
    },
    {
      name: "work",
      url: "work/"
    },
    {
      name: "contact",
      url: "contact/"
    }
  ];

  return (
    <>
      {children}
      <MainNavigation pages={pages}/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
