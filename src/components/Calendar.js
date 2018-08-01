import React, { Component } from 'react'

import CalendarNavContainer from '../containers/CalendarNavContainer'
import CalendarHeader from './CalendarHeader'
import CalendarMonthContainer from '../containers/CalendarMonthContainer'

class Calendar extends Component {
  render () {
    return (
      <div className='calendar'>
        <CalendarNavContainer />
        <CalendarHeader />
        <CalendarMonthContainer />
      </div>
    )
  }
}

export default Calendar
