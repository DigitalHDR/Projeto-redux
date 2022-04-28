export function addReserve(trip) {
  return {
    type: 'ADD_RESERVE',
    trip, //isto é o que esta sendo enviado
  }
}

export function renoveReserve(id) {
  return {
    type: 'REMOVE_RESERVA',
    id, //isto é o que esta sendo enviado
  }
}

export function updateAmoutReserve(id, quantidade) {
  return {
    type: 'UPDATE_RESERVA',
    id, //isto é o que esta sendo enviado
    quantidade,
  }
}

