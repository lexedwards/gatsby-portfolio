import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


export default () => (

  <Layout>
    <SEO title="Thank you!" />
    <main className="content">
      <div className="col3 flexcol-center">
        <h1 className="bold">
         Thank <span className="primary">you!</span>
        </h1>
        <p className="lead">I'll be in touch ASAP, I'm never too far away from my phone or computer. <span role="img" aria-label="hand waving">✌️</span> </p>
        <p className="para secondary">~ Alex</p>
      </div>
    </main>
  </Layout>
)
