import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { Profile } from 'src/app/models/profile';
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
      this.profileService.GetProfile(p.get('UserID')).subscribe((singleProfile: Profile) => {
        this.profile = singleProfile;
        this.createForm();
      });
    });
  }
  ngOnInit() {
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
    const updateProfile: Profile = {
      FirstName: form.value.FirstName,
      LastName: form.value.LastName,
      Birthday: form.value.Birthday,
      Email: form.value.Email,
      PhoneNumber: form.value.PhoneNumber,
      OtherInfo: form.value.OtherInfo
    };
    this.profileService.UpdateProfile(updateProfile).subscribe(d => {
      this.router.navigate([`/profile/get-profile/${localStorage.getItem("UserID")}`]);
    });
    // this.profileService.UpdateProfile(updateProfile).subscribe(data => console.log(data));
    // console.log(this.profileEditForm.value);
  }
}

