import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { Profile } from '../../../models/profile';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
// import { RegisterUser } from 'src/app/models/register-user';

@Component({
  selector: 'app-get-profile',
  templateUrl: './get-profile.component.html',
  styleUrls: ['./get-profile.component.css']
})
export class GetProfileComponent implements OnInit {

  Profile: Profile;
  register: any;
  columnName = [
    'ProfileID', 'FirstName', 'LastName', 'Birthday', 'Email', 'PhoneNumber', 'OtherInfo', 'AthleteUsername', 'ParentUsername', 'MyTeams', 'Comments'];
  dataSource: MatTableDataSource<Profile>;
  
  constructor(private profileService: ProfileService, private _activatedRoute: ActivatedRoute) {
    this.register = localStorage.getItem('role');
    console.log(localStorage.getItem('role'));
    this._activatedRoute.paramMap.subscribe(routerData => {
      console.log(routerData.get('UserID'));
      this.profileService.GetProfile(routerData.get('UserID')).subscribe((profile: Profile) => {
        this.Profile = profile;
        console.log(this.Profile);
        //console.log(profile, this.register.role);
      });
    });
  }

  ngOnInit() {
  }
}
