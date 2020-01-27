import React, { useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import FormGroup from "../components/molecules/FormGroup";
import FormField, { TextField } from "../components/molecules/FormField";
import { Button } from "../components/molecules/atoms/Button";
import NetlifyForm from "../components/NetlifyForm";

export default () => {

  const [ state, setState ] = useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  return (
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
            <p className="lead secondary">~ Just be sure to let me know how to contact you!</p>
          </p>
        </div>
          <NetlifyForm
            name="Contact Form"
            action="/thanks/"
            useFormState={[ state, setState ]}
            className="col3 flexcol-center"
          >
            <FormGroup>
            <FormField
              uniqueId="input--fullname"
              type="text"
              name="Full Name"
              placeholder="Name"
              isRequired={true}
              errorMessage="So, What do I call you?"
              hasVerification={true}
              handleChange={handleChange}
            />
            <FormField
              uniqueId="input--email"
              type="email"
              placeholder="Email"
              isRequired={true}
              errorMessage="Can I have your Email please?"
              hasVerification={true}
              handleChange={handleChange}
            />
            <TextField 
              uniqueId="input--message"
              name="Message"
              isRequired={true}
              placeholder="Write your message..."
              errorMessage="Maybe an Introduction?"
              rows="5"
              handleChange={handleChange}
            />
          </FormGroup>
          <input type="hidden" name="form-name" value="Contact Form" />
          <Button
            type="secondary"
            isSubmit
            size="large"
            label="Say Hi and let me know what you're interested in"
          >
            Send me a Message
          </Button>
          </NetlifyForm>
        </main>
    </Layout>
  )
}
