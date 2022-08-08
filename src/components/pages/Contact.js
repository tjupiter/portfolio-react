import React from 'react';
import { Link } from 'react-router-dom';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.main className="container contact"
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 80, duration: .2 }}
      exit={{ x: '100vw', transition: .1 }}
    >
      <div>
        <h2 className='contact-header-text'>Contact</h2>
        <p>CONTACT CARD</p>
      </div>

      <motion.div className='link-container'>
        <Link to='/projects' className='link'>
          <button className='step-button'>
            <FaLongArrowAltLeft className='arrow' /> Projects
          </button>
        </Link>
        
      </motion.div>
    </motion.main>
  )
}

export default Contact