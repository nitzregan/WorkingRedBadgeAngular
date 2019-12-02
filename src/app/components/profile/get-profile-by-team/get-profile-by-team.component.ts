import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { Profile } from 'src/app/models/Profile';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {  MatTableDataSource } from '@angular/material';
import { Team } from 'src/app/models/Team';


@Component({
  selector: 'app-get-profile-by-team',
  templateUrl: './get-profile-by-team.component.html',
  styleUrls: ['./get-profile-by-team.component.css']
})
export class GetProfileByTeamComponent implements OnInit {
  team: Team;
  Profile;
  columnName = [
    'ProfileID', 'FirstName', 'LastName', 'Birthday', 'Email', 'PhoneNumber', 'OtherInfo', 'AthleteUsername', 'ParentUsername', 'MyTeams', 'Comments'];
    dataSource: MatTableDataSource<Profile>;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.GetAllProfilesByTeam(this.team.TeamID).subscribe((profile: Profile[])=>{
      this.dataSource = new MatTableDataSource<Profile>(profile);
      console.log(profile);
      this.Profile=profile;
    });
  }
}
