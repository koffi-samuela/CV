import React from 'react'
import './Experience.scss';
import bowser from '../../assets/img/bowser.png'

export default function Experience() {
  return (
    <>
    <section id='experience'>
        <div className="title_exp">
        <h2 class="exp_title">Mon experience</h2>
          </div>
        <div id="experience-section">

            <div class="experience-card">
                    <img class="experience-icon" src={bowser} alt="" />
                <h4 class="experience-title">2023 - Développeuse web</h4>
                <div class="experience-description">
                    <p>Durant une mission de six semaines, J'ai été chargé de développer un site e-commerce avec Wordpress et Woocomerce pour la boutique Les Trouvailles de Thaïs. Mon travail a consisté à intégrer des fonctionnalités primordiales, notamment différentes méthodes de paiement et des choix de livraison souples en point relais, afin d'offrir une expérience utilisateur impeccable et de garantir une gestion efficace des commandes.</p>
                </div>
            </div>

        </div>

    </section>
    </>
  )
}
