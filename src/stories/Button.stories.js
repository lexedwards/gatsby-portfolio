import React from "react";

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { text, select } from "@storybook/addon-knobs";

import { Button, LinkButton } from '../components/molecules/atoms/Button';

const stories = storiesOf('Buttons', module);

const Sizes = {
  icon : 'icon',
  medium: 'medium',
  large: 'large'
}

const Type = {
  Primary : 'primary',
  Secondary : 'secondary',
  Disabled : 'disabled',
  Purple : 'accent1',
  Green : 'accent2',
  Red :'accent3' ,
}


stories.add('Action Button', () => 
  (<Button 
    size={select('Size', Sizes, 'large')}
    type={select('Type', Type, 'primary')}
    label={text('Description','Click this button for more information' )}
    action={action('Action Button : Clicked')}
  >
    {text('Label', 'Click Me!')}
  </Button>)
);

stories.add('Link Button', () => (
  <LinkButton
    size={select('Size', Sizes, 'large')}
    type={select('Type', Type, 'primary')}
    label={text('Description','Click this button for more information' )}
    to={text('URL' ,'/')}
  >
    {text('Label', 'Click Me!')}
  </LinkButton>
))