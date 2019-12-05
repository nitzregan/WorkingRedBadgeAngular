import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { Profile } from '../../../models/profile';
// import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { TeamService } from '../../../services/team.service';
import { Team } from '../../../models/team';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-get-profile-by-team',
  templateUrl: './get-profile-by-team.component.html',
  styleUrls: ['./get-profile-by-team.component.css']
})
export class GetProfileByTeamComponent implements OnInit {
  team: Team;
  Profile;
  register: any;
  columnName = [
    'ProfileID', 'FirstName', 'LastName', 'Birthday', 'Email', 'PhoneNumber', 'OtherInfo', 'AthleteUsername', 'ParentUsername', 'MyTeams', 'Comments'];
  dataSource: MatTableDataSource<Profile>;
  constructor(private profileService: ProfileService, private _activatedRoute: ActivatedRoute, private teamService: TeamService, private router: Router) { }
  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routerData => {
      this.profileService.GetAllProfilesByTeam(routerData.get('TeamID')).subscribe((profile: Profile[]) => {
        this.register = localStorage.getItem('role');
        this.dataSource = new MatTableDataSource<Profile>(profile);
        console.log(profile);
        this.Profile = profile;
      });
    });
  }

  onClick(ProfileID){
    this._activatedRoute.paramMap.subscribe(params => {
      this.teamService.removeAthleteFromRoster(ProfileID, params.get('TeamID')).subscribe(data => {
        console.log(data);
        this.router.navigate([`team/detail/${params.get('TeamID')}`]);
      })
    })
  }
}