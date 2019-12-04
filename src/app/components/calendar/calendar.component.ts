import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/Event';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  calendarPlugins = [dayGridPlugin, interactionPlugin]; // important!
  testEvents: any = [
    { title: 'Test 1', start: '2019-12-02T13:00:00', end: '2019-12-03T14:00:00', id: 27, groupId: 24 },
    { title: 'Test 2', date: '2019-12-04', id: 8, groupId: 30 }
  ]
  calendarEvents: any = []
  constructor(private eventService: EventService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.calendarEvent();
  }
  handleDateClick(arg) { // handler method
    alert(arg.dateStr);
    console.log(arg)
  }

  featuredEvent: any;
  handleEventClick(e){
    this.eventService.EventDetail(e.event.id, e.event.groupId).subscribe((event: Event) =>{
      event = this.featuredEvent;
    })
    console.log(e.event.id);
    console.log(e.event.groupId);
    this.router.navigate([`/event/detail/${e.event.groupId}/${e.event.id}`]);
  }

  ngOnInit() {
    // this.eventService.getEvents(1).subscribe((events: Event[]) => {
    //   this.dataSource = new MatTableDataSource<Event>(events);
    //   console.log(events);

    // });
  }
  calendarEvent() {
    this.eventService.getEvents(1).subscribe((event: Event[]) => {
      for (var e of event) {
        var calEvent =
        {
          title: e.Title,
          start: e.Start,
          end: e.End,
          allday: e.AllDayEvent,
          id: e.EventID,
          groupId: e.TeamID
        }
        this.calendarEvents.push(calEvent);
      }
    });
    console.log(this.calendarEvents)
  }
  
















  
}
