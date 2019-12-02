import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/Event';
import {  MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-event-index',
  templateUrl: './event-index.component.html',
  styleUrls: ['./event-index.component.css']
})
export class EventIndexComponent implements OnInit {
Event;
  constructor(private eventService: EventService) { }
columnNames = ['EventID', 'TeamID', 'Title', 'Content', 'AllDayEvent', 'Start', 'End' ];
dataSource: MatTableDataSource<Event>;
  ngOnInit() {
    this.eventService.getEvents(1).subscribe((events: Event[])=>{
      this.dataSource = new MatTableDataSource<Event>(events);
    });
  }
}