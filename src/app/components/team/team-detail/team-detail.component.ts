import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';
import { Team } from 'src/app/models/team';
@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {
  team: Team;
  constructor(private activatedRoute: ActivatedRoute, private teamService: TeamService, private router: Router) { }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(routeData => {
      this.teamService.getTeamByID(routeData.get('TeamID')).subscribe((team: Team)=> {
        this.team = team;
      });
    });
  }
  onSubmit(){
    this.activatedRoute.paramMap.subscribe(routeData => {
      this.router.navigate([`/profile/roster/${routeData.get('TeamID')}`])
    
  })
}
}