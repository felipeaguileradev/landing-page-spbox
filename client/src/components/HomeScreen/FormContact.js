import React, { useState } from 'react'
import axios from 'axios'
import Loader from 'react-loader-spinner'

const FormContact = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [tel, setTel] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)

  const submitRequest = async (e) => {
    e.preventDefault()

    console.log('DESDE CLIENTE', { email, message, name, tel })

    setLoading(true)
    await axios
      .post('/api/send-email', {
        email,
        message,
        name,
        tel
      })
      .then(() => {
        console.log('mensaje enviado correctamente')
        setLoading(false)
        resetForm()
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }

  const resetForm = () => {
    setEmail('')
    setMessage('')
    setTel('')
    setName('')
  }
  return (
    <form className="flex flex-col justify-center" onSubmit={submitRequest}>
      <div className="flex flex-col">
        <label htmlFor="name" className="hidden">
          Nombre Completo
        </label>
        <input
          type="name"
          name="name"
          id="name"
          placeholder="Nombre Completo"
          className="w-100 py-3 px-3 rounded-md bg-white  border border-gray-400  text-gray-800 font-normal focus:border-indigo-500 focus:outline-none"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="flex flex-col mt-2">
        <label htmlFor="email" className="hidden">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="w-100 mt-2 py-3 px-3 rounded-md bg-white border border-gray-400 text-gray-800 font-normal focus:border-indigo-500 focus:outline-none"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="flex flex-col mt-2">
        <label htmlFor="tel" className="hidden">
          Número de teléfono
        </label>
        <input
          type="tel"
          name="tel"
          id="tel"
          placeholder="Número de teléfono"
          className="w-100 mt-2 py-3 px-3 rounded-md bg-white  border border-gray-400  text-gray-800 font-normal focus:border-indigo-500 focus:outline-none"
          required
          value={tel}
          onChange={(e) => setTel(e.target.value)}
        />
      </div>

      <div className="flex flex-col mt-2">
        <label htmlFor="tel" className="hidden">
          Mensaje
        </label>
        <textarea
          name="message"
          id="message"
          type="text"
          rows="2"
          placeholder="Mensaje"
          className="w-100 mt-2 py-3 px-3 rounded-md bg-white  border border-gray-400  text-gray-800 font-normal focus:border-indigo-500 focus:outline-none"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="md:w-32 bg-indigo-600 text-white font-bold py-3 px-6 rounded-md mt-5 hover:bg-indigo-700 transition ease-in-out duration-300"
      >
        {loading ? (
          <div className=" flex justify-center">
            <Loader type="Puff" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          'Enviar'
        )}
      </button>
    </form>
  )
}

export default FormContact
