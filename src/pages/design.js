import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default () => (
  <Layout>
    <SEO title="Design System" />
    <main className="content">
      <div className="col4 flexcol-center">
        <h1 className="major">
          <span className="primary">Design</span> System
        </h1>
        <p className="para">
          Once I've finished the website, I'll publish the design system on this page,
          fully interactive, of each components.
        </p>
      </div>
    </main>
  </Layout>
)