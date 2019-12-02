import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/Event';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  calendarPlugins = [dayGridPlugin, interactionPlugin]; // important!
  testEvents: any = [
    { title: 'Test 1', start: '2019-12-02T13:00:00', end: '2019-12-03T14:00:00' },
    { title: 'Test 2', date: '2019-12-04' }
  ]
  calendarEvents: any = []
  constructor(private eventService: EventService) {
    this.calendarEvent();
  }
  handleDateClick(arg) { // handler method
    alert(arg.dateStr);
    console.log(arg)
  }
  ngOnInit() {
    this.eventService.getEvents(1).subscribe((events: Event[]) => {
      //this.dataSource = new MatTableDataSource<Event>(events);
      console.log(events);
    });
  }
  calendarEvent() {
    this.eventService.getEvents(1).subscribe((event: Event[]) => {
      for (var e of event) {
        var calEvent =
        {
          title: e.Title,
          start: e.Start,
          end: e.End,
          allday: e.AllDayEvent
        }
        this.calendarEvents.push(calEvent);
      }
    });
    console.log(this.calendarEvents)
  }
}
