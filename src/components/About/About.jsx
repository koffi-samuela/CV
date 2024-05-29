import React from 'react'
import './About.scss';
import mario_img from '../../assets/img/marioexp.png'
import profile_img from '../../assets/img/profile.png'
export default function About() {
  return (
        <section id="presentation" >
                <div class="aboutMe ">
                        <div class="profile">                
                            <img class="rounded-3" src={profile_img} alt=""/>
                        </div>
                        <div class="aboutMe__texte">
                            {/* <h2><span>p</span><span>r</span><span>e</span><span>s</span><span>e</span><span>n</span><span>t</span><span>a</span><span>t</span><span>i</span><span>o</span><span>n</span></h2> */}
                            <h2>PRESENTATION</h2>
                                <p>Au cours de mes études, j'ai développé une réelle passion pour le web en me spécialisant dans la création d'applications. Cette expérience m'a permis d'acquérir des compétences solides et de me familiariser avec divers langages de programmation. Actuellement en quête d'une alternance pour ma troisième année à partir de septembre, mon objectif est d'appliquer mes connaissances dans des projets informatiques captivants et de continuer à progresser dans le domaine de la programmation. Je suis motivée pour apprendre et contribuer de manière proactive à des équipes intéressantes et dynamiques.</p>
                                <div class="mariocar"> 
                                    {/* <h4 class="go"> Let's gooo !!!</h4> */}
                                    <img src={mario_img} alt=""  class="mario_car"/>
                                </div>
                        </div>
                </div>
                {/* <div class="marioText">
                    <ul> 
                        <li>Super Mario</li>
                        <li>Super Mario</li>
                        <li>Super Mario</li>
                        <li>Super Mario</li>
                    </ul>
                </div> */}
</section>
  )
}
