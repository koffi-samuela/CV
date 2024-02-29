import React, { useEffect } from 'react';
import './Header.scss';
import { Icon } from '@iconify/react';
import logo from '../../assets/img/Logo.png'
import mariolink from '../../assets/img/mariolink.png'
import luigilink from '../../assets/img/luigilink.png'
import { useState } from 'react';

export default function Header() {
  useEffect(function () {
    let logo = document.querySelector('.logo')
document.addEventListener('scroll', function() {
    var navbar = document.querySelector('nav');
    // console.log(navbar);
    let links = navbar.querySelectorAll('.navRight a')
    // console.log(scrollY);
    if (scrollY > 60) {
        navbar.style.backgroundColor = "#001f3f"; // Couleur au scroll
      navbar.style.paddingTop=".8vh"
        logo.style.width = "40px"
        links.forEach((link) => {
          link.style.fontSize = '14px'
          })

    } 
    else {
        navbar.style.backgroundColor = "transparent"; // Couleur initiale lorsque remonté
        logo.style.width = "65px"
        links.forEach((link) => {
          link.style.fontSize = '16px'
          })
        // navbar.document.querySelector('a').style.fontSize = "10px"

    }
    
  })

  },[])

  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    
    <>
    <header>
        <nav className="fixed-top">
                <div className="navLeft">
                        {/* <!-- <a href=""><img  className="logo" src="./assets/img/logo1.png" alt="" srcset="" width="80px"></a> --> */}
                        <a href="#"><img  className="logo" src={logo} alt="logo" /></a>
                </div>
                <div className="navRight">
                        <ul className="navlink">
                            <li><a href="#Hero">Accueil</a></li>
                            <li><a href="#presentation">Moi</a>
                             </li>
                            <li><a href="#skill">Compétences</a> 
                            </li>
                            <li><a href="#experience">Expérience</a></li>
                            <li><a href="#projects">Projets</a></li>
                            <li><a href="#hobbies">Hobbies</a></li>
                            <li><a href="#footer">Contact</a></li>
                    </ul>

                </div>
                <div className="BurgermenuIcone">
                    <button className="btn btn-outline menu_burger" onClick={toggleMenu}> 
                    <Icon icon="charm:menu-hamburger" width="45" style={{color: "rgb(255, 255, 255)"}}/></button>
                </div>
                <div className={`burgerMenu ${menuActive ? 'active' : ''}`}>
                        <div className="close">
                            <h4>Menu</h4>
                            <button className="btn btn-outline closed" onClick={toggleMenu}>
                              <Icon icon="material-symbols:close-rounded" style={{color: "rgb(255, 255, 255)"}} width="40"/>
                              </button>
                        </div>
                        <ul>
                            <li><a href="#Hero">Accueil</a></li>
                            <li><a href="#presentation">Moi</a></li>
                            <li><a href="#skill">Compétences</a></li>
                            <li><a href="#experience">Expérience</a></li>
                            <li><a href="#projects">Projets</a></li>
                            <li><a href="#hobbies">Hobbies</a></li>
                            <li><a href="#footer">Contact</a></li>
                    </ul>
                </div>
        </nav>
    </header>
    </>
  )
}
