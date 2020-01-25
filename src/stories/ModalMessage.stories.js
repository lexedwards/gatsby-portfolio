import React from "react";

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, select } from "@storybook/addon-knobs";

import ModalMessage from '../components/molecules/atoms/ModalMessage';

import '../styles/main.scss'

const stories = storiesOf('Modal', module);

const Themes = {
  Primary : 'primary',
  Secondary : 'secondary',
  Purple : 'accent1',
  Green : 'accent2',
  Red :'accent3' ,
}

stories.add('Alert', () => 
  (
    <ModalMessage
      theme={select('Theme', Themes, 'accent3')}
      handleClose={action('Closed the Message')}
    >
      {text('Message', 'Alert the User to something')}
    </ModalMessage>
  )
);