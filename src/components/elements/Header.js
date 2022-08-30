import React from 'react';
import './Header.css';
import { motion } from 'framer-motion';
import {
  FaAt,
  FaLinkedin
} from "react-icons/fa";

function Header() {
  const headerVariants = {
    hidden: { y: -250 },
    visible: { y: -10,
      transition: {
        type: 'spring',
        stiffness: 120,
        delay: 0.2
      }
    }
  }

  return (
    <motion.header
      variants={headerVariants}
      initial='hidden'
      animate='visible'
      className='header'
    >
      <div className='header-inner-container'>
        <div>Istvan Pitju Balogh</div>
      <div className='header-icon-container'>
          <a 
            href="mailto:hello@pitju.hu" 
            title="hello@pitju.hu" 
            target="_blank" rel="noreferrer" 
            className='header-icons'>
            <FaAt />
          </a>
          <a 
            href="https://www.linkedin.com/in/pitju/" 
            title="https://www.linkedin.com/in/pitju/" 
            target="_blank" rel="noreferrer" 
            className='header-icons'>
          <FaLinkedin />
          </a>
        </div>
      </div>
      </motion.header>
  )
}

export default Header