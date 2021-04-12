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
            <div className="w-full h-auto">
              <img
                className="w-full h-full object-cover"
                src={project.image}
                alt={project.client}
              />
            </div>
            <div className="w-full h-full bg-transparent flex justify-center items-center  absolute bottom-0 left-0 ">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="w-52  h-20 border-2 border-light-blue-500 border-opacity-75  text-white hover:bg-gray-900 hover:bg-opacity-75 hover:border-0 px-3 py-2 rounded-md text-lg font-medium text-center flex justify-center items-center "
              >
                Ver página
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  )
}

export default Carousel
