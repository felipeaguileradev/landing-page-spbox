import React, { useEffect } from 'react'
import Carousel from '../components/HomeScreen/Carousel'
import Contact from '../components/HomeScreen/Contact'
import ProjectsHome from '../components/HomeScreen/ProjectsHome'
import { projectsData } from '../data/projectsData'
import { SliceData } from '../data/SliceData'

export const HomeScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {}
  }, [])

  return (
    <main className="bg-gray-50 ">
      <Carousel projects={SliceData} />
      <ProjectsHome allProjects={projectsData} />
      <Contact />
    </main>
  )
}
