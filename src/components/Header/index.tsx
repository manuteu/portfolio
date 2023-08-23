import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

export default function Header() {
  return (
    <header className='sticky top-0 z-50 flex justify-center w-full bg-[#F5F5F5] border-b-2'>
      <div className='flex justify-between items-center py-2 max-w-[1300px] w-5/6'>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <p className='cursor-pointer text-4xl font-bold'>Matheus Rodrigues</p>
        </Link>
        <nav>
          <ul className='flex'>
            <Link
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={-32}
              duration={500}
            >
              <li className='hover:animate-waving cursor-pointer' >
                Experiência
              </li>
            </Link>
            <Link
              activeClass="active"
              to="education"
              spy={true}
              smooth={true}
              offset={-32}
              duration={500}
            >
              <li className='hover:animate-waving cursor-pointer'>
                Formação
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  )
}
