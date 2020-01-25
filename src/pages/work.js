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
          I'm sorry <span role="img" aria-label="Sad Emotion">😔</span>
        </p>
      </div>
    </main>
  </Layout>
)
