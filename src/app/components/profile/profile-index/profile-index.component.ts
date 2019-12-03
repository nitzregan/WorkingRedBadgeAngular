import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { Profile } from 'src/app/models/Profile';
import { MatTableDataSource } from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-profile-index',
  templateUrl: './profile-index.component.html',
  styleUrls: ['./profile-index.component.css']
})
export class ProfileIndexComponent implements OnInit {
  profile: Profile;

  constructor(private profileService: ProfileService, ) { }

  columnName = ['ProfileID', 'FirstName', 'LastName', 'Birthday', 'Email', 'PhoneNumber', 'OtherInfo', 'AthleteUsername', 'ParentUsername', 'MyTeams', 'Comments']
  dataSource: MatTableDataSource<Profile>;

  ngOnInit() {
    this.profileService.GetAllProfiles().subscribe((profile: Profile[])=>{
      this.dataSource = new MatTableDataSource<Profile>(profile);
      
    });
  }
}
