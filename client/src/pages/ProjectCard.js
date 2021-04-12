import React, { useEffect } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getProjectByID } from '../selectors/getProjectById'

const ProjectCard = () => {
  const { projectId } = useParams()

  const project = getProjectByID(projectId)

  const { client, image, description, date } = project

  if (!project) {
    return <Redirect to="/" />
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {}
  }, [])

  console.log(project)
  return (
    <main className="h-screen ">
      <div className="w-full h-96">
        <img
          className="w-full h-full object-contain "
          src={image}
          alt={client}
        />
      </div>
      <div className="mt-10 container mx-auto">
        <h3 className=" text-3xl text-center">{client}</h3>
        <p className="text-center mb-10 ">{date}</p>
        <p className="text-center">{description}</p>
      </div>
    </main>
  )
}

export default ProjectCard
