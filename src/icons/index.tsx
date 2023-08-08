import React from 'react';
import Course from './components/Course';
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
    default:
      break;
  }
}
