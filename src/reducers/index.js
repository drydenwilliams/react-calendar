import { combineReducers } from 'redux'
import calendarReducer from './calendar-reducer'

const allReducers = combineReducers({
  calendar: calendarReducer
})

export default allReducers
