import moment from 'moment'
import guid from '../utils/uuid'

/**
 * createCalendarMonth
 * createCalendarMonth creates a new calender month
 * from the first week to the last in that month
 *
 */
const createCalendarMonth = (startWeek, endWeek) => {
  const calendarArray = []
  // TODO: Fix this as it doesnt work for december
  for (
    let weekIndex = startWeek, weekArrayIndex = 0;
    weekIndex < endWeek + 1;
    weekIndex++, weekArrayIndex++
  ) {
    const weekUuid = guid()

    calendarArray.push({
      uuid: weekUuid,
      weekIndex,
      index: weekArrayIndex,
      days:
        Array(7)
        .fill({ id: 0 })
        .map((item, index) => ({
          uuid: guid(),
          parentWeekUuid: weekUuid,
          date: moment()
            .week(weekIndex)
            .startOf('week')
            .clone()
            .add(item.id + index, 'day'),
          weekIndex,
          index: item.id + index,
          reminders: []
        }))
    })
  }
  return calendarArray
}

const initialStartWeek = moment().startOf('month').add(0, 'month').week()
const initialEndWeek = moment().endOf('month').add(0, 'month').week()
const currentMonth = createCalendarMonth(initialStartWeek, initialEndWeek)

// Initial State
const initialState = {
  currentMonthIndex: 0,
  month: currentMonth,
  year: { 0: currentMonth }
}

function calendarReducer (state = initialState, action) {
  switch (action.type) {
    case 'CALENDAR_PREV_MONTH': {
      const prevMonthIndex = state.currentMonthIndex - 1
      const updatedStartWeek = moment().startOf('month').add(prevMonthIndex, 'month').week()
      const updatedEndWeek = moment().endOf('month').add(prevMonthIndex, 'month').week()

      const updatedYearCalendar = {
        ...state.year,
        [state.currentMonthIndex]: state.month, // Save the current month
        [prevMonthIndex]: state.year[prevMonthIndex] ?  state.year[prevMonthIndex] : createCalendarMonth(updatedStartWeek, updatedEndWeek)
      }

      return {
        ...state,
        currentMonthIndex: prevMonthIndex,
        month: updatedYearCalendar[prevMonthIndex],
        year: updatedYearCalendar
      }
    }
    case 'CALENDAR_NEXT_MONTH': {
      const nextMonthIndex = state.currentMonthIndex + 1
      const updatedStartWeek = moment().startOf('month').add(nextMonthIndex, 'month').week()
      const updatedEndWeek = moment().endOf('month').add(nextMonthIndex, 'month').week()

      const updatedYearCalendar = {
        ...state.year,
        [state.currentMonthIndex]: state.month,  // Save the current month
        [nextMonthIndex]: state.year[nextMonthIndex] ?  state.year[nextMonthIndex] : createCalendarMonth(updatedStartWeek, updatedEndWeek)
      }

      return {
        ...state,
        currentMonthIndex: nextMonthIndex,
        month: updatedYearCalendar[nextMonthIndex],
        year: updatedYearCalendar
      }
    }
    case 'ADD_REMINDER': {
      const updatedMonth = state.month.map((week, index) => {
        if (action.payload.weekIndex === index) {
          const dayToUpdate = week.days[action.payload.weekdayIndex]

          dayToUpdate.reminders.push({
            text: '',
            date: moment(),
            category: 'home',
            open: true,
            newReminder: true,
            uuid: guid(),
            parentDayUuid: week.days[action.payload.weekdayIndex].uuid,
            grandparentUuid: week.uuid
          })
        }

        return week
      })

      return {
        ...state,
        month: updatedMonth
      }
    }
    case 'DELETE_REMINDER': {
      const updatedMonth = state.month.map((week, index) => {
        if (action.payload.weekIndex === index) {
          const dayToUpdate = week.days[action.payload.weekdayIndex]
          dayToUpdate.reminders = dayToUpdate.reminders.filter(reminder => reminder.uuid !== action.payload.reminder.uuid)
        }

        return week
      })

      return {
        ...state,
        month: updatedMonth
      }
    }
    case 'EDIT_REMINDER': {
      const updatedMonth = state.month.map((week, index) => {
        if (action.payload.weekIndex !== index) {
          return week
        }

        const dayToUpdate = week.days[action.payload.weekdayIndex]
        dayToUpdate.reminders = dayToUpdate.reminders.map((reminder) => {
          if (reminder.uuid !== action.payload.reminder.uuid) {
            return reminder
          }

          return {
            ...reminder,
            ...action.payload.reminder,
            updateTime: moment()
          }
        })

        return week
      })

      return {
        ...state,
        month: updatedMonth
      }
    }
    default:
      return state
  }
}

export default calendarReducer
