# React/Redux Developer Task -  React Calender with Reminders

The aim of this exercise is to create a demo calendar application using React & Redux. You should take no more than 1h30m to complete this task.

You should start by rendering a single month view of a calendar for the current month - along the lines of the below illustration:

![Design from React calendar dev test](https://github.com/drydenwilliams/react-calendar/blob/master/react-calendar-dev-test.png "Design for react calendar test")

Once this is rendered, please implement as many of the following requirements as time allows:
* Ability to add a new “reminder” (max 30 chars) for a user entered day and time.
* Display reminders on the calendar view in the correct time order.
* Allow the user to select a colour when creating a reminder and display it appropriately.
* Properly handle overflow when multiple reminders appear on the same date.
* Ability to edit reminders – including changing text, day and time & colour.
* Ability to delete reminders.
* Expand the calendar to support more than current month.

Taken from: [An Example Senior React/Redux Developer Task - Developer Jobs Board](https://developerjobsboard.co.uk/2018/07/28/an-example-senior-react-redux-developer-task/)


---

## My React Calendar Dev Test

Here's what my final UI looked like.

![Screenshot from React calendar dev test](https://github.com/drydenwilliams/react-calendar/blob/master/screenshot.png "Screenshot from React calendar dev test")

### Installation

```
yarn

yarn start // http://localhost:3000/
```

### Comments

* It would have been nice to have more time on this, it was very rushed for the time limit.
* The styling is just CSS. I could have added something like [`classnames`](https://github.com/JedWatson/classnames) or [`styled-components`](https://github.com/styled-components/styled-components) but think importing the `index.css` works perfectly well for this example.
* I would have liked to have cleaned up the reducers a bit and adding [`immutable-js`](https://facebook.github.io/immutable-js/).
* Could have wrote some nice tests for the `createCalendarMonth` in the `calender-reducer` using [Enzyme](https://github.com/airbnb/enzyme)
* I've gone back through and commented much of the code to help show logic for others. (please don't comment about code should be clear enough just to read without comments)

### Bugs and Todo's

* It doesn't work for December because the weeksIndex is higher than the first of Jan
* If a day of the next month is shown on the current month. And you enter a reminder for that. Then navigate to the next month. The reminder will not show. I have not merged the reminders for this.