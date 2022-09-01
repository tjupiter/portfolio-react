import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './ProjectCard.css'
import ProjectCardImage from './ProjectCardImage';
import { FaGithub } from 'react-icons/fa';
import { GoDeviceDesktop } from 'react-icons/go';
import { motion, useAnimation } from 'framer-motion'

function ProjectCard(props) {
  const divVariants = {
    hidden: { opacity: 0, scale: 0},
    visible: { opacity: 1, scale: 1,
      transition: { duration: .3, delay: props.index % 2 ? 0.15 : 0.05 }
    }
  }

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    }
  }, [control, inView])

  return (
    <motion.div className='card-container'
      variants={divVariants}
      initial='hidden'
      animate={control}
      ref={ref}
    >
      <ProjectCardImage slug={props.slug} title={props.title} />
      {/* <img src={rcw} alt={`Screenshot of ${props.title}`} /> */}
      <a 
        href={props.siteUrl} title={props.siteUrl} 
        target="_blank" rel="noopener noreferrer"
        className='card-title-link'
        >
        <h3 className='card-title'>{props.title}</h3>
      </a>
      <p className='card-text'>
        {props.text}
      </p>
     <div className='card-link-outer-container'>
        <div className="card-link-container">
          <a 
            href={props.siteUrl} title={props.siteUrl} 
            target="_blank" rel="noopener noreferrer" 
            className="card-link"
            tabIndex="-1">
            <GoDeviceDesktop />
          </a>
        </div>
        <div className="card-link-container">
          <a 
            href={props.githubUrl} title={props.githubUrl} 
            target="_blank" rel="noopener noreferrer"
            className="card-link">
            <FaGithub />
           </a>
        </div>
     </div>
    </motion.div>
  )
}

export default ProjectCard