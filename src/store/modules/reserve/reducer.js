import produce from 'immer'

export default function reserve(state = [], action) {
  switch (action.type) {
    case 'ADD_RESERVE':
      return produce(state, (draft) => {
        const tripIndex = draft.findIndex((trip) => trip.id === action.trip.id)

        if (tripIndex >= 0) {
          draft[tripIndex].quantidade += 1
        } else {
          draft.push({
            ...action.trip,
            quantidade: 1,
          })
        }
      })

    case 'REMOVE_RESERVA':
      return produce(state, (draft) => {
        const tripIndex = draft.findIndex((trip) => trip.id === action.id) // aqui não é action.trip.id, porque i id já esta sendo enviado la no dispath

        if (tripIndex >= 0) {
          draft.splice(tripIndex, 1) //remove o tripIndex no 1° elemento que achar
        }
      })

    default:
      return state
  }
}
