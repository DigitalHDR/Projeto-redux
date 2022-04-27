import React, { useState, useEffect } from 'react'
import api from '../../services/api'

const Home = () => {
  const [tripes, setTripes] = useState([])

  useEffect(() => {
    async function loadApi() {
      const response = await api.get('trips')
      setTripes(response.data) //esse .data é para pegar todo que estiver em trip na api
      console.log(response.data)
    }
    loadApi()
  }, [])


  return <div>Home</div>
}

export default Home
