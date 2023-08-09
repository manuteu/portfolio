import React from 'react'

export default function Header() {
  return (
    <header className='flex justify-between items-center py-10 max-w-[1300px] m-auto w-5/6'>
      <div className=''>
        <a href="index.html" className='text-4xl font-bold'>Matheus Rodrigues</a>
      </div>
      <nav className=''>
        <ul className='flex'>
          <li><a href="#experience">Experiência</a></li>
          <li><a href="#education">Formação</a></li>
          <li><a href="index.html">Contato</a></li>
        </ul>
      </nav>
    </header>
  )
}
