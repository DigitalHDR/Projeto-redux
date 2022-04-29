import React, { useState, useEffect } from 'react'
import { MdOutlineFlightTakeoff } from 'react-icons/md'
import './style.css'
import { useDispatch } from 'react-redux'
import { addReserve } from '../../store/modules/reserve/actions'
import db from '../../db.json'

const Home = () => {
  const dispatch = useDispatch()

  function handleAdd(trip) {
    dispatch(addReserve(trip))
  }

  return (
    <>
      <div className="box">
        {db.trips.map((trip, index) => (
          <li key={index}>
            <img src={trip.image} alt={trip.title} />
            <strong>{trip.title}</strong>
            <span>Status: {trip.status ? 'Disponivel' : 'Indisponível'}</span>

            <button type="button" onClick={() => handleAdd(trip)}>
              <div>
                <MdOutlineFlightTakeoff size={16} color="#fff" />
              </div>
              <span>Solicitar Reserva </span>
            </button>
          </li>
        ))}
      </div>
    </>
  )
}


{/* <alinhamento do batao dentro do card sempre em baixo tendo descrição grande ou pequena so funciona com gri e grid-gap */}

export default Home
