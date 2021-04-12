import React from 'react'
import Slider from 'infinite-react-carousel'

const Carousel = ({ projects }) => {
  return (
    <section className="w-full  overflow-hidden ">
      {/* <h1 className="">Carousel con infinite-react-carousel</h1> */}
      <Slider
        className="w-full relative "
        autoplay
        autoplaySpeed={5000}
        pauseOnHover={false}
        arrows={false}
        dots
        appendDots={(dots) => (
          <ul style={{ display: 'block', marginTop: 0 }}>{dots}</ul>
        )}
      >
        {projects.map((project) => (
          <div key={project.id}>
            <div className="w-full h-96 bg-green-500 ">
              <img
                className="w-full h-full object-cover"
                src={project.image}
                alt={project.client}
              />
            </div>
            <div className="w-full h-full bg-transparent flex justify-center absolute bottom-0 left-0 ">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-72 h-10 bg-blue-700 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Ir al proyecto
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  )
}

export default Carousel
