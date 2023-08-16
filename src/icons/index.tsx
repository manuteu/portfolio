import React from 'react';
import ArrowUp from './components/ArrowUp';
import Course from './components/Course';
import Github from './components/Github';
import Languages from './components/Languages';
import Linkedin from './components/Linkedin';
import Mail from './components/Mail';
import Traits from './components/Traits';
import WhatsApp from './components/WhatsApp';

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
    case 'github':
      return <Github />;
    case 'linkedin':
      return <Linkedin />;
    case 'wpp':
      return <WhatsApp />;
    case 'mail':
      return <Mail />;
    default:
      break;
  }
}
