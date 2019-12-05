import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../../services/event.service';
import { Event } from '../../../models/event';
// import { Team } from 'src/app/models/Team';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {
  event:Event;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private eventService: EventService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.eventService.EventDetail(params.get('EventID'), params.get('TeamID')).subscribe((event:Event) => {
        this.event=event;
        this.createForm();
      });
    });
  }
  ngOnInit() {
  }
  createForm() {
    this.editForm = this.formBuilder.group({
      Title: new FormControl(this.event.EventID),
      Content: new FormControl(this.event.Content),
      Start: new FormControl(this.event.Start),
      End: new FormControl(this.event.End),
      AllDayEvent: new FormControl(this.event.AllDayEvent)
    });
  }
  onSubmit() {
    const editEvent: Event = {
      Title: this.editForm.value.Title,
      Content: this.editForm.value.Content,
      Start: this.editForm.value.Start,
      End: this.editForm.value.End,
      AllDayEvent: this.editForm.value.AllDayEvent
    };
    this.eventService.EditEvent(editEvent).subscribe(() => {
      this.router.navigate(['/event']);
    });
  }
}