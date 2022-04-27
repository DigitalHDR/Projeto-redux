//esse arquivo server carregar todos os reducer que tiver
import { combineReducers } from 'redux'

//1° reducer
import reserve from './reserve/reducer' 

//2° reducer
//seria no caso aqui mais ainda não tem

export default combineReducers({
  reserve,
  //2° reducer se no caso tiver colocaria aqui
})