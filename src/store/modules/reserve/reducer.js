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
    default:
      return state
  }
}
