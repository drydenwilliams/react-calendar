import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import ReminderItem from './ReminderItem'

const propTypes = {
  disabled: PropTypes.bool
}

class CalendarMonth extends React.Component {
  constructor (props) {
    super(props)

    this.renderWeeks = this.renderWeeks.bind(this)
  }

  handleDoubleClick (weekIndex, weekdayIndex, weekdayDate) {
    // If day is in the past, dont allow click
    if (moment() > weekdayDate) {
      return
    }

    this.props.actions.addReminder(weekIndex, weekdayIndex)
  }

  getDayClass (day) {
    const today = moment()
    const classes = ['week__day']

    if (today.isSame(day, 'd')) {
      classes.push('week__day--today')
    }

    if (today > day) {
      classes.push('week__day--past')
    }

    if (day.day() === 0 || day.day() === 6) {
      classes.push('week__day--weekend')
    }

    return classes.join(' ')
  }

  renderWeeks (week, index) {
    const { month, actions } = this.props

    // TODO: Clean this up and pop in to a list component
    return month.map((week, index) => (
      <div key={week.uuid} className='week'>
        {week.days.map((weekday, index) => (
          <div
            key={weekday.uuid}
            className={this.getDayClass(weekday.date)}
            onDoubleClick={() => this.handleDoubleClick(week.index, weekday.index, weekday.date)}
          >
            {weekday.date.format('D')}
            {weekday.reminders.map((reminder) => (
              <ReminderItem
                key={reminder.uuid}
                reminder={reminder}
                weekIndex={week.index}
                weekdayIndex={weekday.index}
                editReminder={actions.editReminder}
                deleteReminder={actions.deleteReminder}
              />
            ))}
          </div>
        ))}
      </div>
    ))
  }

  render () {
    return (
      <div className='calendar__month'>
        {this.renderWeeks()}
      </div>
    )
  }
}

CalendarMonth.propTypes = propTypes

export default CalendarMonth
