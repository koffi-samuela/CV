import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import mario_img from '../../assets/img/marioexp.png'
import './Card.scss'

export default function Card({ icon, title }) {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div className="skill_card my-2" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        {/* <img src={mario_img} alt="" width="25px" className={`mario ${isHovered ? 'hovered' : ''}`} /> */}
        <div className="card text-light p-3">
          <div className="card-body p-0">
            <p> <Icon icon={icon} width="35" /></p>
            <p className="card-title"> {title}</p>
          </div>
        </div>
      </div>
    );
  }
