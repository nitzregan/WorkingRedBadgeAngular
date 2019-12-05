import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../../services/event.service';
import { Event } from '../../../models/event';
@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: Event;
  constructor(private activatedRoute: ActivatedRoute, private eventService: EventService) { }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(routeData => {
      this.eventService.EventDetail(routeData.get('EventID'),routeData.get('TeamID')).subscribe((event:Event) => {
        this.event = event;
      });
    });
  }
}
