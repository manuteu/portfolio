import React from 'react';
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
    default:
      break;
  }
}
