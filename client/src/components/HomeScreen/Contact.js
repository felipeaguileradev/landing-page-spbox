import React from 'react'
import FormContact from './FormContact'

const Contact = () => {
  return (
    <section className="flex justify-center px-4 bg-gray-800 pt-10 mt-10">
      <div className="container py-6">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className=" max-w-lg max-h-80 mx-auto p-6 mb-10 md:mb-0 md:mr-5 xl:mx-auto bg-gray-100  rounded-md ">
            <h1 className="text-2xl  text-gray-800 font-medium tracking-tight">
              Contáctanos
            </h1>
            <p className="text-normal text-lg sm:text-lg font-normal text-gray-600  mt-2">
              Complete el formulario para iniciar una conversación
            </p>

            <div className="flex items-center mt-8 text-gray-600 ">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div className="ml-4 text-md tracking-wide font-medium w-40">
                Santiago,Calle #123 Chile
              </div>
            </div>

            <div className="flex items-center mt-4 text-gray-600 ">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div className="ml-4 text-md tracking-wide font-medium w-40">
                +56 912345678
              </div>
            </div>

            <div className="flex items-center mt-2 text-gray-600 ">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                className="w-8 h-8 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div className="ml-4 text-md tracking-wide font-medium w-40">
                contacto@spbox.cl
              </div>
            </div>
          </div>

          <FormContact />
        </div>
      </div>
    </section>
  )
}

export default Contact
