import React from 'react'
import './style.css'
import { MdDelete, MdAddCircle, MdRemoveCircle } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
import {
  renoveReserve,
  updateAmoutReserve,
} from '../../store/modules/reserve/actions'

const Reservas = () => {
  const dispatch = useDispatch()
  const reserve = useSelector((state) => state.reserve)

  function handleRemove(id) {
    dispatch(renoveReserve(id))
  }

  function decrementaQuantidade(trip) {
    dispatch(updateAmoutReserve(trip.id, trip.quantidade - 1))
  }

  function incrementaQuantidade(trip) {
    dispatch(updateAmoutReserve(trip.id, trip.quantidade + 1))
  }

  return (
    <>
      <div className="title">Voce solicitou {reserve.length} Reservas</div>
      {reserve.map((reserve, index) => (
        <div key={index} className="reservas">
          <img src={reserve.image} alt={reserve.title} />
          <strong>{reserve.title}</strong>

          <div id="quantidade">
            <button type="button" onClick={() => decrementaQuantidade(reserve)}>
              <MdRemoveCircle size={25} color="#000" />
            </button>

            <input type="text" readOnly value={reserve.quantidade} />

            <button type="button" onClick={() => incrementaQuantidade(reserve)}>
              <MdAddCircle size={25} color="#000" />
            </button>
          </div>

          <button type="button" onClick={() => handleRemove(reserve.id)}>
            <MdDelete size={20} color="#000" />
          </button>
        </div>
      ))}
    </>
  )
}

export default Reservas
