import React from 'react'
import './Footer.scss';
import { Icon } from '@iconify/react';
import logo from '../../assets/img/Logo.png'

export default function Footer() {
  return (
    <footer id='footer'>
    <div className="footerColumns">
        <div className="footerColumns__left">
            <img src={logo} alt="" className='footer_logo'/>
        </div>
        <div className="footerColumns__center">
            <h5 className="">Navigation</h5>
                <div className="nav_footer">
                    <a href="#projects"> Projets</a>
                    <a href="#hobbies"> Hobbies</a>
                    <a href="#parcours"> Parcours</a>
                    <a href="#experience"> Experience</a>
                    <a href="#skill"> Compétences</a>
                </div>
        </div>
        <div className="footerColumns__right">
            <div className="footerColumns__right__item">
                <Icon icon="openmoji:github" width="40"/>
                <p><a href="https://github.com/koffi-samuela">Koffi-samuela</a></p>
            </div>
            <div className="footerColumns__right__item">
                <Icon icon="openmoji:linkedin"  className="icon_tel" width="40"/>
                <p><a href="https://www.linkedin.com/in/samuela-koffi-824568257/">samuela KOFFI</a></p>
            </div>
            <div className="footerColumns__right__item">
                <Icon icon="openmoji:telephone"  className="icon_tel" width="40"/>
                <p><a href="tel:+33784912345">+33751472504</a></p>
            </div>
            <div className="footerColumns__right__item">
                <Icon icon="icon-park:mail" className="icon_mail" width="35"/>
                <p><a href="mailto:samukoffi123gmail.com">samukoffi123gmail.com</a></p>
            </div>
        </div>
    </div>
    <div className="copy">
        <p>
            © Samuela KOFFI - Tous droits réservés.
        </p>
    </div>
  </footer>
  )
}
