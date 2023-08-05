import React from 'react'
import SelectIcon from '../../icons'

export default function Tittle() {
  return (
    <section className='flex mt-40'>
      <div className='w-1/2'>Foto</div>
      <div className='relative'>
        <div className='absolute right-[26em] bottom-[6em] -z-10'>
          {SelectIcon('traits')}
        </div>
        <div className='text-left'>
          <h1 className='text-7xl font-bold leading-[1.1em] mb-5'>Desenvolvedor <br /> Front End.</h1>
          <span className='ml-1'>Localizado em Brasília.</span>
        </div>
      </div>
    </section>
  )
}
