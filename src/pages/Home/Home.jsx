import React from 'react'
import Hero from '../../components/Hero'
import About from '../../components/About'
import Parcours from '../../components/Parcours'
import Experience from '../../components/Experience'
import Hobbies from '../../components/Hobbies/Hobbies'
import Skill from '../../components/Skill'
import Project from '../../components/Project/Project'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Parcours />
      <Skill />
      <Experience />
      <Project />
      <Hobbies />
    </>
  )
}
