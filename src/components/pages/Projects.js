import React from 'react';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { motion } from 'framer-motion';
import ProjectCard from '../elements/ProjectCard';
import projects from '../../assets/projects.js'

function Projects( ) {
  console.log(projects)

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
            {projects.map((project) => (
              <ProjectCard 
                title={project.title}
                text={project.description}
                siteUrl={project.siteUrl}
                githubUrl={project.githubUrl}
    
                />
            ))}
          </div>
        </div>
      </motion.main>
      <motion.div
        className='button-container projects-buttons'
      >
        <Link to='/' className='link' >
          <motion.button className='step-button'
            whileHover={{
              scale: 1.2,
              boxShadow: '2px 2px 1px rgba(80, 112, 234, 0.8)',
              border: '1px solid rgba(80, 112, 234, 0.8)'
            }}
          >
            <FaLongArrowAltLeft className='arrow' />
            <span className='button-text-span'>Home</span>
          </motion.button>
        </Link>
        <Link to='/contact' className='link' >
          <motion.button className='step-button'
            whileHover={{
              scale: 1.2,
              boxShadow: '2px 2px 1px rgba(80, 112, 234, 0.8)',
              border: '1px solid rgba(80, 112, 234, 0.8)'
            }}
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