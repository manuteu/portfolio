import React, { useEffect, useState } from 'react'
import SelectIcon from '../../icons'
import { motion } from 'framer-motion'

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

export default function ToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  const className = ""

  const toggleVisibility = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
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
        <button
          type="button"
          onClick={scrollToTop}
          className={classNames(
            isVisible ? 'opacity-100' : 'opacity-0',
            'bg-[#67DD0A] hover:bg-[#B6F829] flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none',
          )}
        >
          {SelectIcon('arrow_up')}
        </button>
      </motion.div>
    </div>

  )
}
