import React from 'react';
import ArrowUp from './components/ArrowUp';
import Course from './components/Course';
import Languages from './components/Languages';
import Traits from './components/Traits';

export default function SelectIcon(
  icon: string,
  size: any = null,
  color: any = null,
  opacity: any = null
) {
  switch (icon) {
    case 'traits':
      return <Traits />;
    case 'course':
      return <Course />;
    case 'languages':
      return <Languages />;
    case 'arrow_up':
      return <ArrowUp />;
    default:
      break;
  }
}
