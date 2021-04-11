import React from 'react'
import Carousel from '../components/Carousel'
import projectsData from '../components/projectsData'

export const HomeScreen = () => {
  return (
    <>
      <Carousel projects={projectsData} />
    </>
  )
}
