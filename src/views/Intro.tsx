import React from 'react'
import Tittle from '../components/Tittle'

export default function Intro() {
  return (
    <section className='flex justify-between items-center w-5/6 max-w-[1300px] m-auto'>
      <div className='w-full min-w-[470px]' >
        <img style={{borderRadius: '100%'}} width='70%' height="70%" src={require('../assets/eu_noivo.jpg')} alt="" />
      </div>
      <div className='w-full max-w-[660px]'>
        <Tittle />
      </div>
    </section>
  )
}
