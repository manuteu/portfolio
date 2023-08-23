import React, { useEffect, useState } from 'react'
import SelectIcon from '../../icons'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

export default function ToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className="fixed bottom-5 right-5">
      <motion.div
        className="box"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >

          <button
            type="button"
            className={classNames(
              isVisible ? 'opacity-100' : 'opacity-0',
              'bg-[#67DD0A] hover:bg-[#B6F829] flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none',
            )}
          >
            {SelectIcon('arrow_up')}
          </button>
        </Link>
      </motion.div>
    </div>

  )
}
