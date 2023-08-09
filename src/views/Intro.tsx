import React from 'react'
import Tittle from '../components/Tittle'

export default function Intro() {
  return (
    <section className='flex justify-between w-5/6 max-w-[1300px] m-auto'>
      <div className='w-full min-w-[470px]' />
      <div className='w-full max-w-[660px]'>
        <Tittle />
      </div>
    </section>
  )
}
