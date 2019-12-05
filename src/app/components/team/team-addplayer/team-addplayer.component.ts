import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TeamService } from '../../../services/team.service';
import { Team } from '../../../models/team';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from '../../../models/profile';
@Component({
  selector: 'app-team-addplayer',
  templateUrl: './team-addplayer.component.html',
  styleUrls: ['./team-addplayer.component.css']
})
export class TeamAddplayerComponent implements OnInit {
  team: Team;
  profile: Profile;
  editForm: FormGroup;
  //private router: Router
  constructor(private formBuilder: FormBuilder, private teamService: TeamService, private activatedRoute: ActivatedRoute, private router: Router) {
  }
  ngOnInit() {
  }
  
  onSubmit() {
    this.activatedRoute.paramMap.subscribe(params => {
    this.teamService.addAthleteToRoster(params.get('TeamID'), (this.profile.ProfileID) ).subscribe(data =>{
      console.log(data);
      this.router.navigate(['profile/index']);
      })  
    })
  }
}
