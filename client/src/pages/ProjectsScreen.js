import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { projectsData } from '../data/projectsData'

export const ProjectsScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    return () => {}
  }, [])

  return (
    <main className="flex justify-center px-4 bg-gray-50  ">
      <div className="container py-6">
        <div className="py-10 ">
          <h2 className=" text-center text-2xl font-semibold ">
            Todos Nuestro Proyectos
          </h2>
          <p className="text-center text-lg font-light text-gray-500">
            Bienvenido, acá puedes visualizar todos nuestros proyectos
          </p>
        </div>
        <div className="px-10 grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="wrapper max-w-xs bg-gray-50 rounded-md shadow-lg overflow-hidden mx-auto flex flex-col justify-between"
            >
              <div>
                <div>
                  <img
                    src={project.image}
                    alt={project.client}
                    className="h-60 object-cover"
                  />
                </div>
                <div className="p-3 space-y-3">
                  <h3 className="text-gray-700 font-semibold text-md">
                    {project.client}
                  </h3>
                  <span className="text-xs font-light text-gray-500">
                    {project.date}
                  </span>
                  <p className="text-sm text-gray-900 leading-sm">
                    {project.description}
                  </p>
                </div>
              </div>
              <Link
                to={`/proyectos/${project.id}`}
                className="bg-gradient-to-r from-blue-600 to-blue-800  w-full flex justify-center py-2 text-white font-semibold transition duration-300 hover:bg-teal-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
                Ver proyecto
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
