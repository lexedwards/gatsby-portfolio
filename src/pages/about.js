import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default () => (
  <Layout>
    <SEO title="About" />
    <main className="content">
      <div className="col4 flexcol-center">
        <h1 className="major">About <span className="primary">Me</span></h1>
        <p className="lead">
          Hi <span aria-label="Peace-Symbol hand" role="img">✌️</span><br />
          I'm Alex, a Full Stack developer who loves Front-End work and UX Engineering, an avid 
          reader, and loves to explore off the beaten path. 
        </p>
        <p className="para">
          I'm interested in <span className="lead secondary">Design Systems, JAMstack, and Micro-
          Architecture</span> and the role that they play to result in the best experience for 
          the user.
        </p>
        <p className="para">
          Since Oct &apos;16 I took the leap, quit a job and went travelling around Europe and 
          Asia for 1 year before settling into China in a teaching role. 2 years after that I 
          moved back to the UK to crash on the family couch and study for a career in 
          Web Development.
        </p>
        <p className="para">
          My current focus is on reinforcing my skills with further learning, specifically in 
          testing and cloud platforms.
        </p>
        <p className="lead secondary"> 
          I would love to contribute to teams focused on good
          ethics and on projects that aim to bring the best convenience.
        </p>
      </div>
      
    </main>
  </Layout>
)