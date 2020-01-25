import React from 'react';
import PropTypes from 'prop-types';


import CheckboxTrue from '../../../svg/Checkbox--True';
import CheckboxFalse from '../../../svg/Checkbox--False';

export const StatefulCheckbox = ({ bool }) => {
  return bool ? (<CheckboxTrue />) : (<CheckboxFalse />);
};

import RadioTrue from '../../../svg/Radio--True';
import RadioFalse from '../../../svg/Radio--False';

export const StatefulRadio = ({ bool }) => {
  return bool ? (<RadioTrue />) : (<RadioFalse />);
};

StatefulRadio.propTypes = {
  bool: PropTypes.bool.isRequired
};

StatefulCheckbox.propTypes = {
  bool: PropTypes.bool.isRequired
};