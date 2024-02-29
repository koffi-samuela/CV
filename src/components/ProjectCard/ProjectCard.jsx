import React from 'react'
import bloc from '../../assets/img/bloc1.png'
import './ProjectCard.scss'
export default function ProjectCard({title, description,link}) {
  return (
    <div class="project_card grid-item">
            <div class="card p-3 text-white">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer" className='mt-3'><img src={bloc} alt="question_bloc" width="70px"/></a>
            </div>
    </div>
  )
}
