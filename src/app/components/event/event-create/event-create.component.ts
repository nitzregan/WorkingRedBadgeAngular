import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Event } from 'src/app/models/Event';
@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {
  eventForm: FormGroup;
  constructor(private form: FormBuilder, private eventService: EventService, private router: Router) {
    this.createForm();
  }
  ngOnInit() {
  }
  createForm() {
    this.eventForm = this.form.group({
      TeamID: 2,
      Title: new FormControl,
      Content: new FormControl,
      AllDayEvent: new FormControl,
      Start: new FormControl,
      End: new FormControl
    })
  }
  onSubmit() {
    this.eventService.CreateEvent(this.eventForm.value).subscribe( data => {
      console.log(data);
      this.router.navigate(['/event']);
    });
  }
}
