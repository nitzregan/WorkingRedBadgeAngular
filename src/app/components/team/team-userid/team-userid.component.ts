import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from '../../../services/team.service';
import { Team } from '../../../models/team';

@Component({
  selector: 'app-team-userid',
  templateUrl: './team-userid.component.html',
  styleUrls: ['./team-userid.component.css']
})
export class TeamUseridComponent implements OnInit {
  team: Team;
  constructor(private activatedRoute: ActivatedRoute, private teamService: TeamService, private router: Router) { }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(routeData => {
      this.teamService.getTeamsByUserID(routeData.get('UserID')).subscribe((team: Team)=> {
        this.team = team;
      });
    });
  }
}
