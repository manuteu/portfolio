import React from 'react'
import SelectIcon from '../../icons'
import Reveal from '../Reveal'

export default function Tittle() {
  return (
    <div className='flex flex-wrap my-40'>
      <div className='relative'>
        <div className='absolute right-[26em] bottom-[6em] -z-10'>
          {SelectIcon('traits')}
        </div>
        <Reveal  v={{ opacity: 1, y: 0 }} h={{ opacity: 0, y: 100}}>
          <div className='text-left'>
            <h1 className='text-7xl font-bold leading-[1.1em] mb-5'>Desenvolvedor <br /> Front End.</h1>
            <span className='ml-1'>Localizado em Brasília.</span>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
