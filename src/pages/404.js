import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Button} from '../components/molecules/atoms/Button';


export default () => (

  <Layout>
    <SEO title="404: Not found" />
    <main className="content">
      <div className="col3 flexcol-center">
        <h1 className="bold">
         <span className="primary">Whoops!</span>
        </h1>
        <p className="lead">Looks like we took a wrong turn, were you looking for me?</p>
        <Button size="large" type="accent3" label="Take me home" action={() => { window.location.replace(`//${window.location.host}`)}}>
          Go back
        </Button>
      </div>
    </main>
  </Layout>
)
