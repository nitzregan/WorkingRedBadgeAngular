import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/Event';
import { Router } from '@angular/router';
@Component({
  selector: 'app-event-delete',
  templateUrl: './event-delete.component.html',
  styleUrls: ['./event-delete.component.css']
})
export class EventDeleteComponent implements OnInit {
  event: Event;
  constructor(private activatedRoute: ActivatedRoute, private eventService: EventService, private router: Router) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.eventService.EventDetail(params.get('TeamID'), params.get('EventID')).subscribe((event:Event) =>{
        this.event = event;
      });
    });
   }
   onDelete() {
     this.eventService.DeleteEvent(this.event.EventID).subscribe(()=> {
       this.router.navigate(['/calendar']);
     })
   }
  ngOnInit() {
  }
}