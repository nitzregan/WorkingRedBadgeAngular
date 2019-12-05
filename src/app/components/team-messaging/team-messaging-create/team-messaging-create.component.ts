import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { TeamMessagingService } from 'src/app/services/team-messaging.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-team-messaging-create',
  templateUrl: './team-messaging-create.component.html',
  styleUrls: ['./team-messaging-create.component.css']
})
export class TeamMessagingCreateComponent implements OnInit {
  teamMessagingCreateForm: FormGroup;
  constructor(private _form: FormBuilder, private _TeamMessagingService: TeamMessagingService, private _router: Router, private activatedRoute: ActivatedRoute) {
    this.createForm();
   }
   
  ngOnInit() {
  }
  createForm() {
    this.teamMessagingCreateForm = this._form.group({
      Title: new FormControl,
      Content: new FormControl,
    })
  }
  onSubmit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this._TeamMessagingService.createTeamMessage(this.teamMessagingCreateForm.value, params.get('TeamID')).subscribe(data => {

        this._router.navigate([`/team/detail/${params.get('TeamID')}`]);
    });
    });
  }
}