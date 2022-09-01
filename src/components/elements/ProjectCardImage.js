import React from 'react'
import './ProjectCardImage.css'

function ProjectCardImage(props) {
  // console.log(props)
  return (
    <div className='card-image-container'>
      <img src={require(`../../assets/img/${props.slug}.png`)} alt={`Screenshot of ${props.title}`} className='image'/>
    </div>

  )
}

export default ProjectCardImage