import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { TeamService } from 'src/app/services/team.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from '../../../models/team';
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
        this.team=team;
        this._router.navigate([`/team/${params.get('ProfileID')}`]);
      });
    })
  }
}
