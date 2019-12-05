import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../../services/team.service';
import { Team } from '../../../models/team';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-team-delete',
  templateUrl: './team-delete.component.html',
  styleUrls: ['./team-delete.component.css']
})
export class TeamDeleteComponent implements OnInit {
  team: Team;
  constructor(private activatedRoute: ActivatedRoute, private teamService: TeamService, private router: Router) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.teamService.getTeamByID(params.get('TeamID')).subscribe((team: Team) => {
        this.team = team;
      });
    });
   }
  ngOnInit() {
  }
  onDelete() {
    this.teamService.deleteTeam(this.team.TeamID).subscribe(() => {
      this.router.navigate(['/team']);
    });
  }
}