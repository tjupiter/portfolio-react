import React from 'react'
import './ProjectCard.css'
import rcw from '../../assets/img/rcw.png'
import { FaGithub } from 'react-icons/fa';
import { GoDeviceDesktop } from 'react-icons/go'

function ProjectCard(props) {
  return (
    <div className='card-container'>
      <img src={rcw} alt='slug' />
      <h3 className='card-title'>{props.title}</h3>
      <p className='card-text'>
        {props.text}
      </p>
     <div className='card-link-outer-container'>
        <div className="card-link-container">
          <a href={props.siteUrl} className="card-link">
            <GoDeviceDesktop />
          </a>
        </div>
        <div className="card-link-container">
          <a href={props.githubUrl} className="card-link">
            <FaGithub />
           </a>
        </div>
     </div>
    </div>
  )
}

export default ProjectCard