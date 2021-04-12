import React, { useState, useEffect } from 'react'

const ProjectsHome = ({ allProjects }) => {
  const [projectImport, setProjectImport] = useState([])

  useEffect(() => {
    const projects = allProjects.filter((project) => project.important === true)
    setProjectImport(projects)
  }, [])

  return (
    <section className="flex justify-center px-4 bg-gray-50  ">
      <div className="container py-6">
        <h2 className="py-10  text-center text-xl font-semibold ">
          Nuestro Principales Proyectos
        </h2>
        <div className="px-10 grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectImport.map((project) => (
            <div
              key={project.id}
              className="wrapper max-w-xs bg-gray-50 rounded-md shadow-lg overflow-hidden mx-auto"
            >
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
              <button className="bg-blue-400 w-full flex justify-center py-2 text-white font-semibold transition duration-300 hover:bg-teal-500">
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
              </button>
            </div>
          ))}

          <div className="flex flex-col mx-auto w-full max-w-xs  px-6 sm:px-4 lg:px-8 py-4  space-y-6 rounded-lg shadow-lg">
            <div className="flex-shrink-0 pb-6 space-y-2 border-b">
              <h2 className="text-2xl font-normal">Más de 40 proyectos</h2>
              <p className="text-sm text-gray-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>

            <ul className="flex-1 space-y-2">
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-3 text-base font-normal">Consultoría</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-3 text-base font-normal">
                  Implementación e infraestructura
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-3 text-base font-normal">
                  Desarrollo de soluciones
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-3 text-base font-normal">
                  Diseño y Experiencia de usuario UX
                </span>
              </li>
            </ul>

            <div className="flex-shrink-0 pt-2">
              <button className="inline-flex items-center justify-center w-full max-w-xs px-4 py-2 transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-indigo-500 text-white hover:bg-indigo-700">
                Ver más
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsHome
