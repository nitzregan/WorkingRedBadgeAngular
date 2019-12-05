import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { TeamService } from 'src/app/services/team.service';
import { Profile } from 'src/app/models/Profile';
import { MatTableDataSource } from '@angular/material';
import {  Router, ActivatedRoute } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-profile-index',
  templateUrl: './profile-index.component.html',
  styleUrls: ['./profile-index.component.css']
})
export class ProfileIndexComponent implements OnInit {
  Profiles;
  profile:Profile;
  columnName = ['FirstName', 'LastName', 'Email', 'AddAthlete']
  dataSource: MatTableDataSource<Profile>;
  constructor(private profileService: ProfileService, private teamService: TeamService, private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.profileService.GetAllProfiles().subscribe((profile: Profile[])=>{
      this.Profiles = profile;
      this.dataSource = new MatTableDataSource<Profile>(profile);
    });
  }
  onSubmit(ProfileID){
    this.activatedRoute.paramMap.subscribe(params => {
      this.teamService.addAthleteToRoster(ProfileID, params.get('TeamID')).subscribe(data =>{
        console.log(data);
        this.router.navigate([`profile/index/${params.get('TeamID')}`]);
      })
    }) //does not work in progress
  }
}