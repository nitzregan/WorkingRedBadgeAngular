import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { Profile } from 'src/app/models/profile';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  profileEditForm: FormGroup;

  constructor(private form: FormBuilder , private profileService: ProfileService) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.profileEditForm = this.form.group({
      FirstName: new FormControl,
      LastName: new FormControl,
      Birthday: new FormControl,
      Email: new FormControl,
      PhoneNumber: new FormControl,
      OtherInfo: new FormControl,
    })
  }

  onSubmit() {
    this.profileService.UpdateProfile(this.profileEditForm.value).subscribe(data => console.log(data));
    // console.log(this.profileEditForm.value);
  }

}
