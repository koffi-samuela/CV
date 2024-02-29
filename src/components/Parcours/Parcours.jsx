import React, { useEffect } from 'react'
import './Parcours.scss';
import coins from '../../assets/img/coins.gif'
import { Icon } from '@iconify/react';
// import {randomColor} from '../getRandColor';

export default function Parcours() {
    useEffect( () =>{
        let parcours = document.querySelector('.parcours_title')
        // randomColor('Mon parcours',parcours)
    }, []);
  return (
        <section  id="parcours">
            <div class="education">
                <div class="education__title sectionTitle">
                <h2 class="parcours_title">MON PARCOURS</h2>
                    <img src={coins} alt=""  />
                </div>
                <div class="educationDesc container">
                    <div class="educationDesc__item">                        
                        <h4 class="educationDesc__item__title"> <span>Baccalauréat <span><Icon icon="emojione:books" style={{ fontSize: '34px' }}/></span></span></h4>
                        <p class="my-1">Avant mon entrée en Bachelor , j'ai obtenu un baccalauréat en Biologie et en Mathématiques avec mention bien, confirmant mes compétences analytiques et ma capacité à résoudre des problèmes de manière méthodique.</p>
                        {/* <p class="my-1">Approfondissement des compétences en développement web avec un accent sur la création d'applications dynamiques et interactives et du développement web moderne. </p> */}
                    
                    </div>
                    <div class="educationDesc__item ">                        
                        <h4 class="educationDesc__item__title"> <span>Bachelor 1  </span><span><Icon icon="noto:school-backpack" style={{ fontSize: '34px' }} /></span></h4>
                        <p class="my-2">Durant ma première année universitaire, j'ai acquis les fondements du développement informatique, explorant les langages tels que HTML, CSS et JavaScript et d'autres pour avoirs des bases solides en développement web.</p>
                    </div>
                    <div class="educationDesc__item">                        
                        <h4 class="educationDesc__item__title"> <span>Bachelor 2  (en cours)</span><span><Icon icon="noto:desktop-computer" width="35"/></span></h4>
                        <p class="my-1">En deuxième année, je me suis spécialisée dans le développement d'applications, affinant mes compétences vers des langages plus axés sur le développement, tout en explorant des concepts avancés pour créer des applications .</p>
                    </div>
                </div>
            </div>
    </section> 
  )
}
