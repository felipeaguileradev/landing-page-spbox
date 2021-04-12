import React from 'react'
import Carousel from '../components/HomeScreen/Carousel'
import ProjectsHome from '../components/HomeScreen/ProjectsHome'
import projectsData from '../components/projectsData'

export const HomeScreen = () => {
  return (
    <>
      <Carousel projects={projectsData} />
      <ProjectsHome projects={projectsData} />
    </>
  )
}
