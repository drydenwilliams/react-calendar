import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  text: PropTypes.string,
  category: PropTypes.string,
  handleClick: PropTypes.func.isRequired
}

function ReminderLabel ({ text, category, handleClick }) {
  const labelClassList = ['reminder__label']
  if (category === 'work') labelClassList.push('reminder__label--work')
  if (category === 'calendar') labelClassList.push('reminder__label--calendar')

  if (text === '') {
    text = 'New Reminder'
  }

  return (
    <div
      className={labelClassList.join(' ')}
      onClick={handleClick}
    >
      {text}
    </div>
  )
}

ReminderLabel.propTypes = propTypes

export default ReminderLabel
