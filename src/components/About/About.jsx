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
                                <p>Passionnée par le développement web, j'ai approfondi mes compétences en me spécialisant dans la création d'applications au cours de mon parcours universitaire. Actuellement en recherche d'un stage de 3 mois en développement d'applications et une possibilité d’alternance par la suite à la MANU Amiens, je suis animée par le désir de mettre en œuvre mes compétences dans des projets informatiques, tout en nourrissant ma curiosité pour l'apprentissage continu des langages de programmation.</p>
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
