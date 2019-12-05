import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { TeamService } from 'src/app/services/team.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from 'src/app/models/profile';
@Component({
  selector: 'app-team-removeplayer',
  templateUrl: './team-removeplayer.component.html',
  styleUrls: ['./team-removeplayer.component.css']
})
export class TeamRemoveplayerComponent implements OnInit {
  team: Team;
  profile: Profile;
  editForm: FormGroup;
  //private router: Router
  constructor(private formBuilder: FormBuilder, private teamService: TeamService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.teamService.getTeamByID(params.get('TeamID')).subscribe((team: Team) => {
        this.team = team;
        this.createForm();
      });
    });
  }
  ngOnInit() {
  }
  createForm() {
    this.editForm = this.formBuilder.group({
      TeamID: new FormControl(this.team.TeamID),
      TeamName: new FormControl(this.team.TeamName),
      Roster: new FormControl(this.team.Roster),
      TeamEvents: new FormControl(this.team.TeamEvents),
    });
  }
  onSubmit() {
    const updatedTeam: Team = {
      TeamID: this.editForm.value.TeamID,
      TeamName: this.editForm.value.TeamName,
      Roster: this.editForm.value.Roster,
      TeamEvents: this.editForm.value.TeamEvents,
    };
    this.teamService.removeAthleteFromRoster(this, this.team.ProfileID).subscribe(() =>{
      this.router.navigate(['/team']);
    });
  }
}