import React, { Component } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import googleCalendarPlugin from '@fullcalendar/google-calendar'

class TWAWCalendar extends Component {
  render() {
    return (
      <FullCalendar
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin, googleCalendarPlugin]}
        googleCalendarApiKey="AIzaSyCwLLR4440cApf-AvW9guLzWV-at8R_Tw4"
        weekends={true}
        events={[
          {
            googleCalendarId:
              '94ebm0oh6974nf6784k2qoe964@group.calendar.google.com'
          }
        ]}
      />
    )
  }
}

export default TWAWCalendar
