import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Reservas from './pages/Reservas'

export default function Rotas() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/reservas" element={<Reservas />} />
    </Routes>
  )
}
