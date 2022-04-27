import React from 'react'
import './style.css'
import { MdDelete } from 'react-icons/md'

const Reservas = () => {
  return (
    <>
      <div>Voce solicitou 1 Reservas</div>
      <div className="reservas">
        <img
          src="https://sujeitoprogramador.com/wp-content/uploads/2019/12/maceio.jpg"
          alt="maceio"
        />
        <strong>Viagem maceio 7 dias</strong>
        <span>Quantidade: 2</span>
        <button type="button" onClick={() => {}}>
          <MdDelete size={20} color="#000" />
        </button>
      </div>
    </>
  )
}

export default Reservas
