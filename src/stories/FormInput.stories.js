import React from "react";

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { text, boolean, select } from "@storybook/addon-knobs";

import FormField, { TextField } from '../components/molecules/FormField';
import FormGroup from '../components/molecules/FormGroup';
import {Button} from '../components/molecules/atoms/Button';

const stories = storiesOf('Form Fields', module);

stories.add('Dynamic', () => 
  (
    <FormField 
      type={select('Type', Types, 'text' )}
      name={text('Descriptive Name', 'Full Name')}
      placeholder={text('Placeholder', 'Placeholder')}
      errorMessage="These are not the droids you're looking for"
    />
  )
)

stories.add('Subscribe Email', () => 
  (
    <form className="form-page">
      <h1 className="minor">Sign up for Presents</h1>
      <FormGroup id='page-1'>
        <FormField
          type="text"
          name="Full Name"
          placeholder="Who you are"
          errorMessage="So, what do I call you?"
        />
        <FormField
          type="email"
          placeholder="Email"
          errorMessage="Can I have your Email please?"
        />
      </FormGroup>
      <Button 
        type="secondary"
        size="large"
        label="Send me your details so we can send you some great news"
        action={action('Send me the details')}
      >
        Send me a surprise!
      </Button>
    </form>
  )
)

stories.add('Send a Message', () => 
    (
      <form className="form-page">
        <h1 className="minor">Send me a Message</h1>
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
        action={action('Let me know what you ahve going on')}
        >
          Something
        </Button>
      </form>
    )
)







const Types = {
  Email : 'email',
  Number : 'number',
  Phone : 'tel',
  Text : 'text',
  URL : 'url',
}

/*

props:

type

name        // Not needed for Email / Telephone / URL
maxlength / minlength // Overruled by CSS unless type=number (used as min / max values)
placeholder 
required

isValid
errorMessage

(Safe to ignore)
list 
readonly

*/

const autoCompleteFields = {
  'None': 'off',
  'Name': 'name',
  'Email': 'email',
}