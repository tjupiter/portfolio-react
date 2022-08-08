import React from 'react';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { motion } from 'framer-motion';

function Projects( ) {

  const mainMotionVariants = {
    hidden: {
      y: '100vh',
    },
    visible: {
      y: 0,
      transition: { type: 'spring', stiffness: 80, }
    },
    exit: {
      y: '100vh',
      transition: { ease: 'easeInOut'}
    },
  }

 
  return (
    <motion.main className="container project"
      variants={mainMotionVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <div>
        <h2 className='project-header-text'>Projects</h2>
        <p>CARD COMPONENT</p>
      </div>

      <motion.div
        className='button-container'
      >
        <Link to='/' className='link' >
          <button className='step-button'>
            <FaLongArrowAltLeft className='arrow' />
            <span className='button-text-span'>Home</span>
          </button>
        </Link>
        <Link to='/contact' className='link' >
          <button className='step-button'>
            <span className='button-text-span'>Contact</span>
            <FaLongArrowAltRight className='arrow' /> 
          </button>
        </Link>
      </motion.div>
    </motion.main>
  )
}

export default Projects