import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  h?: {}
  v?: {};
  styles?: string
}

export default function Reveal({ children, v = { opacity: 1, x: 0 }, h = { opacity: 0, x: -75 }, styles }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    console.log(isInView);

    if (isInView) {
      mainControls.start('visible')
      slideControls.start('visible')
    }
  }, [isInView])


  return (
    <div ref={ref} className='relative w-full overflow-hidden' >
      <motion.div
        variants={{
          hidden: h,
          visible: v
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.7, delay: 0.2 }}
        className={styles}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" }
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.7, ease: 'easeIn' }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "#67DD0A",
          zIndex: 20,
          borderRadius: 5
        }}
      />
    </div>
  )
}
