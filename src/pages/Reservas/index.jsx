import React from 'react'
import './style.css'
import { MdDelete } from 'react-icons/md'
import { useSelector } from 'react-redux'

const Reservas = () => {
  const reserve = useSelector((state) => state.reserve)

  console.log('minha reserva', reserve)
  return (
    <>
      <div className='title'>Voce solicitou {reserve.length} Reservas</div>
      {reserve.map((reserve, index) => (
        <div key={index} className="reservas">
          <img src={reserve.image} alt={reserve.title} />
          <strong>{reserve.title}</strong>
          <span>Quantidade: 2</span>
          <button type="button" onClick={() => {}}>
            <MdDelete size={20} color="#000" />
          </button>
        </div>
      ))}
    </>
  )
}

export default Reservas
