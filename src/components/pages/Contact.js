import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaLongArrowAltLeft,
  FaPhoneSquareAlt,
  FaAt,
  FaGithub,
  FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion';


function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <motion.main className="container contact"
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 80, duration: .2 }}
      exit={{ x: '100vw', transition: .1 }}
    >
      <div>
        <h2 className='contact-header-text'>Contact</h2>
        <div className='contact-list-container'>
          <ul >
            <motion.li
              whileHover={{ scale: 1.4, color: 'rgba(80, 112, 234, 0.8)' ,originX: 0 }}
              transition={{ duration: .3, type: 'spring', stiffness: 300 }}
            >
              <a href="mailto:hello@pitju.hu" title="hello@pitju.hu">
                <FaAt />
                <span className='link-text'>hello@pitju.hu</span>
              </a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.4, color: 'rgba(80, 112, 234, 0.8)', originX: 0 }}
              transition={{ duration: .3, type: 'spring', stiffness: 300 }}
            >
              <a href="tel:+447456607531" title="+447456607531">
                <FaPhoneSquareAlt />
                <span className='link-text'>07456 607531</span>
              </a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.4, color: 'rgba(80, 112, 234, 0.8)', originX: 0 }}
              transition={{ duration: .3, type: 'spring', stiffness: 300 }}
            >
              <a href="https://github.com/tjupiter/" title="https://github.com/tjupiter/" >
                <FaGithub />
                <span className='link-text'>Github Repo</span>
              </a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.4, color: 'rgba(80, 112, 234, 0.8)', originX: 0 }}
              transition={{ duration: .3, type: 'spring', stiffness: 300 }}
            >
              <a href="https://www.linkedin.com/in/pitju/" title="https://www.linkedin.com/in/pitju/">
                <FaLinkedin />
                <span className='link-text'>Find me on LinkedIn</span>
              </a>
            </motion.li>
          </ul>
        </div>
      </div>

      <motion.div className='link-container'>
        <Link to='/projects' className='link'>
          <motion.button className='step-button'
            whileHover={{ 
              scale: 1.2,
              boxShadow: '2px 2px 1px rgba(80, 112, 234, 0.8)',
              border: '1px solid rgba(80, 112, 234, 0.8)'
            }}

            
          >
            <FaLongArrowAltLeft className='arrow' /> Projects
          </motion.button>
        </Link>
        
      </motion.div>
    </motion.main>
  )
}

export default Contact