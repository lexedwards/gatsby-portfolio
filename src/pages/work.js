import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default () => (
  <Layout>
    <SEO title="Home" />
    <main className="content">
      <div className="col4 flexcol-center">
        <h1 className="major">My <span className="primary">Work</span></h1>
        <p className="lead">
          I'm still exploring viable hosting options for the live demos of my projects
          that have various technologies involved. From simple static sites, to API services,
          and nodeJS servers.
        </p>
        <p className="para"> For up-to-date info on what I'm doing, {' '}
          <a href="//twitter.com/_lexedwards" 
            rel="dns-prefetch noopener nofollow noreferrer" 
            target="_blank" 
            className="link primary">
              check in on me through twitter!
            </a> </p>
        <p className="para">
          My Portfolio project utilises Gatsby for performant React development with
          great SEO in a serverless paradym. I'm constantly learning however, currently tackling
          GraphQL, Cypress, and TailwindCSS in a simple {' '}
          <a 
            href="//github.com/lexedwards/CurrencyConverter"
            className="link primary"
            rel="dns-prefetch noopener nofollow noreferrer"
            target="_blank" > 
            Currency Converting app.
          </a>
          {' '}
          My previous projects have utilised stacks including Node, SCSS, Webpack
          React, ExpressJS, MongoDB, D3, Bcrypt. 
        </p>
        <p className="para">
          <span className="secondary">For now however,</span> please, visit my {' '}
          <a 
            href="//github.com/lexedwards"
            className="link primary"
            rel="dns-prefetch noopener nofollow noreferrer"
            target="_blank"
          >
          Github
          </a>
          {' '}page to see all my work, the documentation and it's source code.
        </p>
        
        <p className="para accent1">
          Due to the nature of the beast, past projects have utilised different technology stacks,
          whilst this website utilises GatsbyJS, this is my first project using it. I want this 
          website to progress to more than a portfolio of past endeavours, so at it's {' '}
          <a 
            href="//github.com/lexedwards/gatsby-portfolio" 
            rel="dns-prefetch noopener nofollow noreferrer"
            target="_blank" 
            className="link primary"
          >
            sourcecode
          </a>
          {' '}
          it's developed something more complicated than what you see
        </p>
      </div>
    </main>
  </Layout>
)
