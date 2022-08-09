import React from 'react';
import './Header.css';
import { motion } from 'framer-motion';

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
    >Istvan Pitju Balogh</motion.header>
  )
}

export default Header