import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  currentMonthTitle: PropTypes.string.isRequired,
  nextMonthAction: PropTypes.func.isRequired,
  prevMonthAction: PropTypes.func.isRequired
}

function CalendarNav ({ currentMonthTitle, nextMonthAction, prevMonthAction }) {
  return (
    <div className='calendar__nav'>
      <button onClick={prevMonthAction}>◀</button>
      <h2>
        {currentMonthTitle}
      </h2>
      <button onClick={nextMonthAction}>▶</button>
    </div>
  )
}

CalendarNav.propTypes = propTypes

export default CalendarNav
