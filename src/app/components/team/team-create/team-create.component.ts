import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { TeamService } from '../../../services/team.service';
import { Team } from '../../../models/team';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css']
})
export class TeamCreateComponent implements OnInit {
  team: Team;
  teamCreateForm: FormGroup;
  constructor(private _form: FormBuilder, private _TeamService: TeamService, private _router: Router, private activatedRoute: ActivatedRoute) {
    this.createForm();
   }
  ngOnInit() {
  }
  createForm() {
    this.teamCreateForm = this._form.group({
      TeamName: new FormControl,
    })
  }
  onSubmit(team: Team) {
    this.activatedRoute.paramMap.subscribe(params => {
      this._TeamService.createTeam(this.teamCreateForm.value, params.get('ProfileID')).subscribe(data => {
        console.log(data);
        //this.team=team;
        // console.log(team);
        this._router.navigate([`/profile/get-profile/${localStorage.getItem('UserID')}`]);
      });
    })
  }
}
