import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { TeamService } from 'src/app/services/team.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from 'src/app/models/profile';
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
