'use client'
import { motion } from 'framer-motion'
import React from 'react'

const Chevron = () => {
  return (
    <motion.a
      href='#listing'  
      animate={{ y: [0, 10, 0] }}  
      transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}  
      style={{ display: 'inline-block', position: 'absolute', bottom: 35, left: '50%', right: '50%', transform: 'transform: translate(-50%, -50%)' }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="white"
        className="bi bi-chevron-down"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </motion.a>
  )
}

export default Chevron