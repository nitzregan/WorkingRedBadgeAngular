import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { TeamService } from 'src/app/services/team.service';
import { Profile } from 'src/app/models/Profile';
import { MatTableDataSource } from '@angular/material';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-profile-index',
  templateUrl: './profile-index.component.html',
  styleUrls: ['./profile-index.component.css']
})
export class ProfileIndexComponent implements OnInit {
  Profiles;
  profile:Profile;

  constructor(private profileService: ProfileService, private teamService: TeamService, private router: Router ) { }

  // columnName = ['ProfileID', 'FirstName', 'LastName', 'Birthday', 'Email', 'PhoneNumber', 'OtherInfo', 'AthleteUsername', 'ParentUsername', 'MyTeams', 'Comments']
  // dataSource: MatTableDataSource<Profile>;

  ngOnInit() {
    this.profileService.GetAllProfiles().subscribe((profile: Profile[])=>{
      console.log(profile);
      this.Profiles = profile;
    });
  }
  onSubmit(){
    this.teamService.addAthleteToRoster(this.profile.ProfileID, this ).subscribe(data =>{
      console.log(data);
      this.router.navigate(['profile/index']);
    }) //does not work in progress

  }
  
}
