import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import { MdOutlineFlightTakeoff } from 'react-icons/md'
import './style.css'
import { useDispatch } from 'react-redux'
import { addReserve } from '../../store/modules/reserve/actions'

const Home = () => {
  const dispatch = useDispatch()
  const [tripes, setTripes] = useState([])

  useEffect(() => {
    async function loadApi() {
      const response = await api.get('trips')
      setTripes(response.data) //.data é para pegar todo que estiver em trip na api
    }
    loadApi()
  }, [])

  function handleAdd(trip) {
    dispatch(addReserve(trip))
  }

  return (
    <>
      <div className="box">
        {tripes.map((trip, index) => (
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

export default Home
