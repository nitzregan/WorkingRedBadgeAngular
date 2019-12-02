import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamMessagingService } from 'src/app/services/team-messaging.service';
import { TeamMessaging } from 'src/app/models/team-messaging';

@Component({
  selector: 'app-team-messaging-detail',
  templateUrl: './team-messaging-detail.component.html',
  styleUrls: ['./team-messaging-detail.component.css']
})
export class TeamMessagingDetailComponent implements OnInit {
  teamMessaging: TeamMessaging;

  constructor(private activatedRoute: ActivatedRoute, private teamMessagingService: TeamMessagingService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(routeData => {
      this.teamMessagingService.getTeamMessageByID(routeData.get('MessageID')).subscribe((teamMessaging: TeamMessaging)=> {
        this.teamMessaging = teamMessaging;
      });
    });
  }

}
