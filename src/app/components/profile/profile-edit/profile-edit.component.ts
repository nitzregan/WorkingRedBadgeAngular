import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { Profile } from '../../../models/profile';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  profileEditForm: FormGroup;
  profile: Profile;

  constructor(private form: FormBuilder,
            private profileService: ProfileService,
            private ar: ActivatedRoute,
            private router: Router) { 
    this.ar.paramMap.subscribe(p => {
      this.profileService.GetProfile(localStorage.getItem("UserID")).subscribe((singleProfile: Profile) => {
        this.profile = singleProfile;
        this.createForm();
      });
    });
  }
  ngOnInit() {
    // console.log(this.test)
    // this.ar.paramMap.subscribe(routerdata => {
    //   this.profileService.GetProfile(this.test).subscribe((profile: Profile)=>{
    //     console.log(profile);
    //     this.profile = profile;
    //   });
    // });
  }
  createForm() {
    this.profileEditForm = this.form.group({
      FirstName: new FormControl(this.profile.FirstName),
      LastName: new FormControl(this.profile.LastName),
      Birthday: new FormControl(this.profile.Birthday),
      Email: new FormControl(this.profile.Email),
      PhoneNumber: new FormControl(this.profile.PhoneNumber),
      OtherInfo: new FormControl(this.profile.OtherInfo),
    });
  }

  onSubmit(form) {
    console.log(form)
    console.log(this.profileEditForm);
    const updateProfile: Profile = {
      ProfileID: this.profile.ProfileID,
      UserID : this.profile.UserID,
      FirstName: this.profileEditForm.value.FirstName,
      LastName: this.profileEditForm.value.LastName,
      Birthday: this.profileEditForm.value.Birthday,
      Email: this.profileEditForm.value.Email,
      PhoneNumber: this.profileEditForm.value.PhoneNumber,
      OtherInfo: this.profileEditForm.value.OtherInfo
    };
    this.profileService.UpdateProfile(updateProfile).subscribe(d => {
      this.router.navigate([`/profile/get-profile/${localStorage.getItem("UserID")}`]);
    });
    // this.profileService.UpdateProfile(updateProfile).subscribe(data => console.log(data));
    // console.log(this.profileEditForm.value);
  }
}

