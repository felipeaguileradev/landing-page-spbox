import React from 'react'

const Footer = () => {
  return (
    <footer className="flex justify-center text-gray-100 bg-gray-800">
      <div className="container pb-6">
        <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
          <div>
            <p className="text-xl font-bold">SPBox</p>
          </div>
          <div className="flex mt-4 md:m-0">
            <div className="-mx-4">
              <p className="px-4 text-sm">Prueba Técnica Felipe Aguilera</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
