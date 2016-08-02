import svgMarkup from './LocationIcon.svg';

import React from 'react';
import Icon from '../icon';

export default function LocationIcon(props) {
  return <Icon markup={svgMarkup} {...props} />;
}

LocationIcon.displayName = 'LocationIcon';
