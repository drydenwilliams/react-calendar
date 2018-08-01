import * as types from '../constants/action-types'

export const prevMonth = () => ({
  type: types.CALENDAR_PREV_MONTH
})

export const nextMonth = () => ({
  type: types.CALENDAR_NEXT_MONTH
})

export const addReminder = (weekIndex, weekdayIndex) => ({
  type: types.ADD_REMINDER,
  payload: { weekIndex, weekdayIndex }
})

export const editReminder = (weekIndex, weekdayIndex, reminder) => ({
  type: types.EDIT_REMINDER,
  payload: { weekIndex, weekdayIndex, reminder }
})

export const deleteReminder = (weekIndex, weekdayIndex, reminder) => ({
  type: types.DELETE_REMINDER,
  payload: { weekIndex, weekdayIndex, reminder }
})
