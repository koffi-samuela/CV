import React from 'react'
import './Skill.scss'
import { Icon } from '@iconify/react';
import Card from '../Card';

export default function Skill() {
  return (
      <section id='skill' className='skill '>
          <div className="skill__title">
          <h2 class="competences_title text-center">MES COMPETENCES</h2>
          </div>
          <div className="skill__content">
                <div className="skill__content__front">
                      <div className="title"> 
                      <h4>Développement front-end</h4>

                      </div>
                      <div className="skill__content__front__item items">
                            <Card icon={"vscode-icons:file-type-html"} title={"HTML"} />
                            <Card icon={"vscode-icons:file-type-css"} title={"CSS"} />
                            <Card icon={"skill-icons:sass"} title={"SASS"} />
                            <Card icon={"skill-icons:javascript"} title={"JAVASCRIPT"} />
                            <Card icon={"logos:vue"} title={"VUE.JS"} />
                            <Card icon={"logos:react"} title={"REACT"} />
                            <Card icon={"logos:bootstrap"} title={"BOOTSTRAP"} />
                        </div>
                      
                </div>
                <div className="skill__content__back">
                      <div className="title"> 
                        <h4>Développement back-end</h4>
                  
                      </div>
                      <div className="skill__content__back__item items">
                            <Card icon={"vscode-icons:file-type-python"} title={"PYTHON"} />
                            <Card icon={"vscode-icons:file-type-php"} title={"PHP"} />
                            <Card icon={"vscode-icons:file-type-symfony"} title={"SYMFONY"} />
                            <Card icon={"devicon:java"} title={"JAVA"} />
                            <Card icon={"devicon:mysql-wordmark"} title={"MYSQL"} />
                        
                      </div>
                </div>
                <div className="skill__content__versionning ">
                      <div className="title">
                         <h4>Versionning</h4>
                         </div>
                      <div className="skill__content__versionning__item items">
                            <Card icon={"devicon:docker-wordmark"} title={"DOCKER"} />
                            <Card icon={"vscode-icons:file-type-git"} title={"GIT"} />
                            <Card icon={"logos:github-octocat"} title={"GITHUB"} />
                          
                      </div>
                </div>
                <div className="skill__content__cms ">
                      <div className="title"> 
                        <h4>CMS</h4>
                      </div>
                      <div className="skill__content__cms__item items">
                            <Card icon={"dashicons:wordpress"} title={"WORDPRESS"} />
                            <Card icon={"devicon:woocommerce"} title={"WOOCOMMERCE"} />
                            <Card icon={"logos:prestashop"} title={"PRESTASHOP"} />
                          
                      </div>
                </div>
                <div className="skill__content__design">
                      <div className="title"> 
                         <h4>Design</h4>
                      </div>
                      <div className="skill__content__design__item items">
                            <Card icon={"devicon:figma"} title={"FIGMA"} />
                            <Card icon={"logos:adobe-xd"} title={"ADOBE XD"} />
                            <Card icon={"skill-icons:photoshop"} title={"PHOTOSHOP"} />
                            <Card icon={"logos:adobe-illustrator"} title={"ILLUSTRATOR"} />
                          
                      </div>
                </div>
          </div>
      </section>
  )
}
