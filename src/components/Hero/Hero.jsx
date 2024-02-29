import React from 'react'
import './Hero.scss'
import { Icon } from '@iconify/react';

export default function Hero() {
        
  return (
    <section id='Hero' className='hero_banner'>

<div class="principalText">
                <h1 class="principalText__title">
                    <span>S</span><span>a</span><span>m</span><span>u</span><span>e</span><span>l</span><span>a</span>
                    <br/>
                    <span class="k">K</span><span class="o">o</span><span class="f">f</span><span class="f2" >f</span><span class="i">i</span>
                </h1>
            {/* <!-- Utilisez ce HTML avec le texte que vous avez fourni --> */}
            <h3 class="principalText__desc"><span>I</span><span> </span><span>a</span><span>m</span><span> </span><span>a</span><span> </span><span>f</span><span>u</span><span>l</span><span>l</span><span>s</span><span>t</span><span>a</span><span>c</span><span>k</span><span> </span><span>d</span><span>e</span><span>v</span><span>e</span><span>l</span><span>o</span><span>p</span><span>e</span><span>r</span><span> </span><span>j</span><span>u</span><span>n</span><span>i</span><span>o</span><span>r</span></h3>
                <div class="cta_btn">
                    <button class="px-4 py-1"> <a href="mailto:samukoffi123@gmail.com">Me contacter</a></button>
                </div>
        </div>
        <div class="contactME ">
            <button type="button" class="btn p-0 px-1"><a href="https://www.linkedin.com/in/samuela-koffi-824568257/" target="_blank" rel="noopener noreferrer"><Icon  icon="mingcute:linkedin-line" width="34" style={{ color: 'white' }} /></a></button>
            <button type="button" class="btn p-0 px-1"><a href="https://github.com/koffi-samuela" target="_blank" rel="noopener noreferrer"><Icon   icon="codicon:github"  width="32"style={{ color: 'white' }}  /></a></button>
            <button type="button" class="btn p-0 px-1"><a href="mailto:samukoffi123gmail.com"  rel="noopener noreferrer"><Icon   icon="lucide:mail" width="32" style={{ color: 'white' }} /></a></button>
            {/* <button type="button" class="btn p-0 px-1"><Icon   icon="line-md:discord" width="32" style={{ color: 'white' }} /></button> */}
            
        </div>
    </section>
  )
}
