import { Component, OnInit } from '@angular/core';
import { TeamMessagingService } from 'src/app/services/team-messaging.service';
import { TeamMessaging } from 'src/app/models/team-messaging';
import { MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-team-messaging-index',
  templateUrl: './team-messaging-index.component.html',
  styleUrls: ['./team-messaging-index.component.css']
})
export class TeamMessagingIndexComponent implements OnInit {
  constructor(private teamMesagingService: TeamMessagingService) { }
  ngOnInit() {
    this.teamMesagingService.getTeamMessages().subscribe((teamMessaging: TeamMessaging[])=>{
      console.log(teamMessaging);
    });
  }
}