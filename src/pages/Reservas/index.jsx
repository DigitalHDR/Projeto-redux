import React from 'react'
import './style.css'
import { MdDelete } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'

const Reservas = () => {
  const dispatch = useDispatch()
  const reserve = useSelector((state) => state.reserve)

  function handleRemove(id) {
    dispatch({
      type: 'REMOVE_RESERVA',
      id,
    })
  }

  console.log('minha reserva', reserve)
  return (
    <>
      <div className="title">Voce solicitou {reserve.length} Reservas</div>
      {reserve.map((reserve, index) => (
        <div key={index} className="reservas">
          <img src={reserve.image} alt={reserve.title} />
          <strong>{reserve.title}</strong>
          <span>Quantidade: {reserve.quantidade}</span>
          <button type="button" onClick={() => handleRemove(reserve.id)}>
            <MdDelete size={20} color="#000" />
          </button>
        </div>
      ))}
    </>
  )
}

export default Reservas
