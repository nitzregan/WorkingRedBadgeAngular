import { Component, OnInit } from '@angular/core';
import { TeamMessaging } from 'src/app/models/team-messaging';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { TeamMessagingService } from 'src/app/services/team-messaging.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-team-messaging-update',
  templateUrl: './team-messaging-update.component.html',
  styleUrls: ['./team-messaging-update.component.css']
})
export class TeamMessagingUpdateComponent implements OnInit {
  teamMessaging: TeamMessaging;
  editForm: FormGroup;
  //private router: Router
  constructor(private formBuilder: FormBuilder, private teamMessagingService: TeamMessagingService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.teamMessagingService.getTeamMessageByID(params.get('MessageID')).subscribe((teamMessaging: TeamMessaging) => {
        this.teamMessaging = teamMessaging;
        console.log(teamMessaging)
        this.createForm();
      });
    });
  }
  ngOnInit() {
  }
  createForm() {
    this.editForm = this.formBuilder.group({
      MessageID: new FormControl(this.teamMessaging.MessageID),
      Title: new FormControl(this.teamMessaging.Title),
      Content: new FormControl(this.teamMessaging.Content),
      File: new FormControl(this.teamMessaging.File),
    });
  }
  onSubmit() {
    const updatedTeamMessage: TeamMessaging = {
      MessageID: this.editForm.value.MessageID,
      Title: this.editForm.value.Title,
      Content: this.editForm.value.Content,
      File: this.editForm.value.File,
    };
    this.teamMessagingService.updateTeamMessage(updatedTeamMessage).subscribe(() =>{
      this.router.navigate(['/teammessages']);
    });
  }
}
