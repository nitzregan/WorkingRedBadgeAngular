import { Component, OnInit } from '@angular/core';
import { TeamMessagingService } from '../../../services/team-messaging.service';
import { TeamMessaging } from '../../../models/team-messaging';
import { ActivatedRoute, Router} from '@angular/router';
// import { MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-team-messaging-index',
  templateUrl: './team-messaging-index.component.html',
  styleUrls: ['./team-messaging-index.component.css']
})
export class TeamMessagingIndexComponent implements OnInit {
  TeamMessaging;
  constructor(private teamMesagingService: TeamMessagingService, private activatedRoute: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.teamMesagingService.getTeamMessages(params.get("TeamID")).subscribe((teamMessaging: TeamMessaging[])=>{
        console.log(teamMessaging);
        this.TeamMessaging = teamMessaging;
    });
    });
  }
  onClick() {
    this.activatedRoute.paramMap.subscribe(data => {
      this.router.navigate([`teammessages/create/${data.get('TeamID')}`]);
    })
  }
}