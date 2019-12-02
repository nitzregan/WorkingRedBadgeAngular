import { Component, OnInit } from '@angular/core';
import { TeamMessagingService } from 'src/app/services/team-messaging.service';
import { TeamMessaging } from 'src/app/models/team-messaging';
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

// import { Component, OnInit } from '@angular/core';
// import { TeamService } from 'src/app/services/team-services.service';
// import { Team } from 'src/app/models/team';
// import { ActivatedRoute, Router } from '@angular/router';
// @Component({
//   selector: 'app-team-delete',
//   templateUrl: './team-delete.component.html',
//   styleUrls: ['./team-delete.component.css']
// })
// export class TeamDeleteComponent implements OnInit {
//   team: Team;
//   constructor(private activatedRoute: ActivatedRoute, private teamService: TeamService, private router: Router) {
//     this.activatedRoute.paramMap.subscribe(params => {
//       this.teamService.getTeamByID(params.get('TeamID')).subscribe((team: Team) => {
//         this.team = team;
//       });
//     });
//    }
//   ngOnInit() {
//   }
//   onDelete() {
//     this.teamService.deleteTeam(this.team.TeamID).subscribe(() => {
//       this.router.navigate(['/team']);
//     });
//   }
// }