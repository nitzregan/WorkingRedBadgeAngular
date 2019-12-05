import { Component, OnInit } from '@angular/core';
import { TeamMessagingService } from '../../../services/team-messaging.service';
import { TeamMessaging } from '../../../models/team-messaging';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-team-messaging-delete',
  templateUrl: './team-messaging-delete.component.html',
  styleUrls: ['./team-messaging-delete.component.css']
})
export class TeamMessagingDeleteComponent implements OnInit {
  teamMessaging: TeamMessaging;
  constructor(private activatedRoute: ActivatedRoute, private teamMessagingService: TeamMessagingService, private router: Router) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.teamMessagingService.getTeamMessageByID(params.get('MessageID')).subscribe((teamMessaging: TeamMessaging) => {
        this.teamMessaging = teamMessaging;
      });
    });
   }
  ngOnInit() {
  }
  onDelete() {
    this.teamMessagingService.deleteTeamMessage(this.teamMessaging.MessageID).subscribe(() => {
      this.router.navigate(['/teammesssages']);
    });
  }
}