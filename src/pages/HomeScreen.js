import React from 'react'
import Carousel from '../components/HomeScreen/Carousel'
import Contact from '../components/HomeScreen/Contact'
import ProjectsHome from '../components/HomeScreen/ProjectsHome'
import { projectsData } from '../components/projectsData'
import { SliceData } from '../components/SliceData'

export const HomeScreen = () => {
  return (
    <main className="bg-gray-50 ">
      <Carousel projects={SliceData} />
      <ProjectsHome allProjects={projectsData} />
      <Contact />
    </main>
  )
}
