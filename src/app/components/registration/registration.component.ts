import { Component, OnInit, createPlatform } from '@angular/core';
import { FormBuilder, FormGroup, FormControl} from "@angular/forms";
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  private registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private authservice: AuthService) {
    this.createform();
   }
  ngOnInit() {
  }
  createform() {
    this.registerForm = this.formBuilder.group({
      email: new FormControl,
      password: new FormControl,
      confirmPassword: new FormControl,
      role: new FormControl,
      athleteUsername: new FormControl
    });
  }
  onSubmit() {
    console.log(this.registerForm.value);
    this.authservice
    .register(this.registerForm.value)
    .subscribe(() => this.authservice.login(this.registerForm.value));
  }
}
