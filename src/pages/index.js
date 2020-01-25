import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {LinkButton} from '../components/molecules/atoms/Button';

export default () => (
  <Layout>
    <SEO title="Home" />
    <main className="content">
      <div className="col3 flexcol-center">
        <h1 className="major">
          Hi <span role="img" aria-label="hand waving">✌️</span>,
          <br />
          I&apos;m
          <span className="primary"> Alex</span>
        </h1>
        <p className="para"><span className="accent1">Full-stack Developer loving</span> <span className="primary">Front End work</span></p>
        <LinkButton size="large" type="primary" label="Send me a message" to="/contact">
          Want to Chat?
        </LinkButton>
      </div>
    </main>
  </Layout>
)