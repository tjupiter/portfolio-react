import React from 'react';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { motion } from 'framer-motion';
import ProjectCard from '../elements/ProjectCard';
import projects from '../../assets/projects.js'

function Projects() {
  const mainMotionVariants = {
    hidden: { y: '100vh' },
    visible: { y: 0,
      transition: { type: 'spring', stiffness: 60, }
    },
    exit: {
      y: '100vh',
      transition: { ease: 'easeInOut'}
    },
  }

  const buttonHoverVariants = {
    scale: 1.2,
    boxShadow: '2px 2px 1px rgba(80, 112, 234, 0.8)',
    border: '1px solid rgba(80, 112, 234, 0.8)'
  }
 
  return (
    <>
      <motion.main className="container project"
        variants={mainMotionVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <div>
          <h2 className='project-header-text'>Projects</h2>
          <div className='project-cards-container'>
            {projects.map((project, i) => (
              <ProjectCard 
                key={project.id}
                title={project.title}
                text={project.description}
                siteUrl={project.siteUrl}
                githubUrl={project.githubUrl}
                slug={project.slug}
                index={i}
                />
            ))}
          </div>
        </div>
      </motion.main>

      <motion.div className='button-container projects-buttons'>
        <Link to='/' className='link' tabIndex={-1}>
          <motion.button className='step-button'
            whileHover={buttonHoverVariants}
            whileFocus={buttonHoverVariants}
          >
            <FaLongArrowAltLeft className='arrow' />
            <span className='button-text-span'>Home</span>
          </motion.button>
        </Link>
        <Link to='/contact' className='link' tabIndex={-1}>
          <motion.button className='step-button'
            whileHover={buttonHoverVariants}
            whileFocus={buttonHoverVariants}
          >
            <span className='button-text-span'>Contact</span>
            <FaLongArrowAltRight className='arrow' /> 
          </motion.button>
        </Link>
      </motion.div>
    </>
  )
}

export default Projects