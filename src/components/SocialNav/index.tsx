import { motion } from 'framer-motion';
import React, { useState } from 'react'
import SelectIcon from '../../icons'

export default function SocialNav() {

  const handleClick = (type: string) => {
    switch (type) {
      case 'linkedin':
        return window.open('https://www.linkedin.com/in/matheus-baptista-rodrigues-1737671a1');
      case 'github':
        return window.open('https://github.com/manuteu');
      case 'wpp':
        return window.open(
          `https://api.whatsapp.com/send?phone=5561983322486&text=Olá, gostaria de marcar um bate papo!`
        );
      case 'mail':
        return window.open('mailto:mathtechn@gmail.com');
      default:
        break;
    }
  }
  return (
    <div className='z-50 fixed my-auto  bottom-[45%] left-5 border-l-2 border-[#525252]'>
      <div className='flex flex-col items-center justify-evenly gap-4 py-4 px-2'>
        <div className='hover:animate-waving cursor-pointer' onClick={() => handleClick('linkedin')}>{SelectIcon('linkedin')}</div>
        <div className='hover:animate-waving cursor-pointer' onClick={() => handleClick('github')}>{SelectIcon('github')}</div>
        <div className='hover:animate-waving cursor-pointer' onClick={() => handleClick('wpp')}>{SelectIcon('wpp')}</div>
        <div className='hover:animate-waving cursor-pointer' onClick={() => handleClick('mail')}>{SelectIcon('mail')}</div>
      </div>
    </div>
  )
}
