import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { Profile } from 'src/app/models/Profile';
// import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {MatTableDataSource} from '@angular/material';
import {ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-get-profile',
  templateUrl: './get-profile.component.html',
  styleUrls: ['./get-profile.component.css']
})
export class GetProfileComponent implements OnInit {

  Profile;
  columnName = [
    'ProfileID', 'FirstName', 'LastName', 'Birthday', 'Email', 'PhoneNumber', 'OtherInfo', 'AthleteUsername', 'ParentUsername', 'MyTeams', 'Comments'];
    dataSource: MatTableDataSource<Profile>;
  constructor(private profileService: ProfileService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routerData => {
      this.profileService.GetProfile(routerData.get('id')).subscribe((profile: Profile[])=>{this.dataSource = new MatTableDataSource<Profile>(profile);
      console.log(profile);
      this.Profile=profile;
    });
    });
  }
}
