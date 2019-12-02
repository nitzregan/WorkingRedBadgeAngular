import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CommentsService } from 'src/app/services/comments.service';
import { Comments } from 'src/app/models/Comments';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-comments-create',
  templateUrl: './comments-create.component.html',
  styleUrls: ['./comments-create.component.css']
})
export class CommentsCreateComponent implements OnInit {
  comment: Comments;
  commentsCreateForm: FormGroup;
  constructor(private _form: FormBuilder, private _CommentsService: CommentsService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.createForm();
   }
  ngOnInit() {
  }
  createForm() {
    this.commentsCreateForm = this._form.group({
      Title: new FormControl(),
      Content: new FormControl(),
      Name: new FormControl(),
    })
  }
  onSubmit(comment: Comments) {
    this.activatedRoute.paramMap.subscribe(params => {
      this._CommentsService.createComment(this.commentsCreateForm.value, params.get('ProfileID')).subscribe(data => {
        this.comment=comment;
        this.router.navigate([`/comments/${params.get('ProfileID')}`]  );
      });
      })
  }
}
