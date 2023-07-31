import React from 'react'

export default function Header() {
  return (
    <header className='flex justify-between items-center py-10 max-w-[1080px] m-auto w-[85%]'>
      <div className=''>
        <a href="index.html" className='text-4xl font-bold'>Matheus Rodrigues</a>
      </div>
      <nav className=''>
        <ul className='flex'>
          <li><a href="index.html">Experiência</a></li>
          <li><a href="index.html">Formação</a></li>
          <li><a href="index.html">Contato</a></li>
        </ul>
      </nav>
    </header>
  )
}
