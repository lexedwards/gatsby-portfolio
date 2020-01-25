import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import FormGroup from "../components/molecules/FormGroup";
import FormField, { TextField } from "../components/molecules/FormField";
import { Button } from "../components/molecules/atoms/Button";

export default () => (
  <Layout>
    <SEO title="Contact" />
    <main className="content ">
      <div className="col2 flexcol-center">
        <h1 className="bold">Contact <span className="primary">Me</span></h1>
        <p className="para">
          I'm reachable on {' '}
        <a 
          href="//twitter.com/_lexedwards" 
          className="link Primary" 
          rel="dns-prefetch noopener nofollow noreferrer"
          target="_blank"
        >
          Twitter
        </a>
        {' '} or directly with an {' '}
        <a 
          href="mailto:hello@alexedwards.co" 
          className="link Primary" 
          rel="noopener nofollow noreferrer"
        >
          Email
        </a></p>
        <p className="para">
          If it's more convenient, you can quickly shoot me a message here!
        </p>
      </div>
      <form className="col3 flexcol-center">
        <FormGroup>
          <FormField
            uniqueId="input--fullname"
            type="text"
            name="Full Name"
            placeholder="Name"
            errorMessage="So, What do I call you?"
            hasVerification={true}
          />
          <FormField
            uniqueId="input--email"
            type="email"
            placeholder="Email"
            errorMessage="Can I have your Email please?"
            hasVerification={true}
          />
          <TextField 
            uniqueId="input--message"
            name="Message"
            placeholder="Write your message..."
            errorMessage="Maybe an Introduction?"
            rows="5"
          />
        </FormGroup>
        <Button
        type="secondary"
        size="large"
        label="Say Hi and let me know what you're interested in"
        >
          Send me a Message
        </Button>
      </form>
      </main>
  </Layout>
)
