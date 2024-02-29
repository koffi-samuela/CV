import React from 'react'
import ProjectCard from '../ProjectCard'
import './Project.scss';

export default function Project() {
  return (
    <section id="projects">
        <div className="projects__title">
            <h2 className='text-center'>MES PROJETS</h2>
        </div>

        <div class="grid-container">
            <ProjectCard title={"La Manubox"} description={"Projet en React, le but était de maîtriser les fondamentaux de ce langage en concevant un site de location de box en implémentant les fonctionnalités qui y correspondent."} link={"https://github.com/MRCThomas/LaManuBox-project"} />           
            <ProjectCard title={"Tableau Périodique"} description={"Projet en React, le but était de réaliser un tableau périodique de physique-chime avec un tableau de données et le style et des pages de détails pour plus d'informations."} link={"https://github.com/koffi-samuela/periodic_tabe"} />           
            <ProjectCard title={"Location de vélos"} description={"Projet en PHP, le but était de faire un site pour la location de vélos  en suivant l'architecture MVC tout en proposant un design attractif et une expérience utilisateur agréable."} link={"https://github.com/BenjaminForestier/Projet_Rental_Bike"} />           
            <ProjectCard title={"Collection d'albums"} description={"Projet en PHP, le but était la conception d'un site de collections d'albums et la gestion des commentaires (CRUD) de chaque album avec l'architecture MVC et la POO."} link={"https://github.com/koffi-samuela/collection_albums"}/>           
            <ProjectCard title={"Site coorporate"} description={"Projet en Symfony, le but était la conception intégrale (du Design au code) d'un site coorporate afin de faciliter la prise en main de Symfony et se familiariser avec ce framework."} link={"https://site-coorporate.onrender.com/"}/>           
            <ProjectCard title={"Shifumi"} description={"Projet en Javascript le but était de recréer le jeu Shifumi sous un autre angle avec toute la logique en Javascript aini qu'une interface attrayante et amusante pour les joueurs."} link={"https://github.com/koffi-samuela/Shifumi/"} />           
            <ProjectCard title={"CookingCamp"} description={"Projet en Sass le but était d'intégrer la maquette d'un site avec Bootstrap en écrasant le style fourni avec nos propres variables pour avoir un propre Bootstrap personnalisé."} link={"https://m8gam3.github.io/cookingcamp/"} />           
            <ProjectCard title={"Todolist"} description={"Projet en Vue.JS le but était de reproduire une Todolist. Elle devait comporter plusieurs fonctionnalités notamment le marquage et la suppression des tâches accompli tout en ayant un design agréable."} link={"https://github.com/koffi-samuela/TODOlist"}/>           
            <ProjectCard title={"Logitech"} description={"Projet en Sass, le but était de reproduire dans un premier temps la maquette du site logitech sur Figma à l'aide des custom properties ensuite de faire l'intégration en scss en respectant la nomenclature de Sass."} link={"https://github.com/koffi-samuela/Logitech"}/>           

    </div>
      </section>
  )
}
