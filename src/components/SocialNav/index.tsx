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
      default:
        break;
    }
  }
  return (
    <div className='z-50 fixed my-auto  bottom-[50%] left-5 border-l-2'>
      <motion.div className='flex flex-col items-center justify-evenly gap-4 py-4 px-2'
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "ease",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001
          }
        }}
      >
        <div className='hover:animate-waving cursor-pointer' onClick={() => handleClick('linkedin')}>{SelectIcon('linkedin')}</div>
        <div className='hover:animate-waving cursor-pointer' onClick={() => handleClick('github')}>{SelectIcon('github')}</div>
        <div className='hover:animate-waving cursor-pointer' onClick={() => handleClick('wpp')}>{SelectIcon('wpp')}</div>
      </motion.div>
    </div>
  )
}
