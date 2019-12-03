import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { Profile } from 'src/app/models/Profile';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { RegisterUser } from 'src/app/models/register-user';

@Component({
  selector: 'app-get-profile',
  templateUrl: './get-profile.component.html',
  styleUrls: ['./get-profile.component.css']
})
export class GetProfileComponent implements OnInit {

  Profile;
  register: RegisterUser;
  columnName = [
    'ProfileID', 'FirstName', 'LastName', 'Birthday', 'Email', 'PhoneNumber', 'OtherInfo', 'AthleteUsername', 'ParentUsername', 'MyTeams', 'Comments'];
  dataSource: MatTableDataSource<Profile>;
  
  constructor(private profileService: ProfileService, private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.paramMap.subscribe(routerData => {
      console.log(routerData.get('UserID'));
      this.profileService.GetProfile(routerData.get('UserID')).subscribe((profile: Profile[]) => {
        this.dataSource = new MatTableDataSource<Profile>(profile);
        console.log(profile, this.register.role);
        this.register.role = localStorage.getItem('role');
        this.Profile = profile;
      });
    });
  }

  ngOnInit() {
  }
}
