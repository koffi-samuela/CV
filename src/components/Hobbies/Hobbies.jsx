import React from 'react'
import './Hobbies.scss'
import peach_basket from '../../assets/img/peach_basket.png'
import star_img from '../../assets/img/star2.gif'
import { Icon } from '@iconify/react'
export default function Hobbies() {
  return (
    <section id="hobbies">
        <div class="stars">
            <img src={star_img} alt="star" />
            <h2>Mes Hobbies</h2>
            <img src={star_img} alt="star"/>
        </div>     
        <div class="peach_section">
            <div class="peach_section__item">

                <Icon icon="emojione-monotone:basketball" className='hobbies_icon' />
                <p>Passionnée de basketball, j'adore passé mon temps libre sur un terrain, développant non seulement mes compétences physiques mais aussi ma stratégie et mon esprit d'équipe.</p>
            </div>
                <div class="peach_section__item">
                    <Icon icon="bx:book-reader"  className='hobbies_icon' />
                    <p>Adepte de la lecture, j'aime m'évader dans des univers variés à travers les livres principalement les romans négritudiens, enrichissant ainsi ma culture et stimulant ma réflexion.</p>
                </div>
                <div class="peach_section__item">
                    <Icon icon="fluent:headphones-sound-wave-20-regular"  className='hobbies_icon' />
                    <p>Amateur de musique, j'apprécie explorer divers genres musicaux et artistes, m'offrant ainsi des moments de détente et d'inspiration dans ma vie quotidienne. </p>
                </div>
        </div>
    </section>
    
  )
}
