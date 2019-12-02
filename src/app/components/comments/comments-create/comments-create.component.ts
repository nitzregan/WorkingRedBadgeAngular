import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CommentsService } from 'src/app/services/comments.service';
import { Comments } from 'src/app/models/Comments';
@Component({
  selector: 'app-comments-create',
  templateUrl: './comments-create.component.html',
  styleUrls: ['./comments-create.component.css']
})
export class CommentsCreateComponent implements OnInit {
  commentsCreateForm: FormGroup;
  constructor(private _form: FormBuilder, private _CommentsService: CommentsService) {
    this.createForm();
   }
  ngOnInit() {
  }
  createForm() {
    this.commentsCreateForm = this._form.group({
      Title: new FormControl,
      Content: new FormControl,
    })
  }
  onSubmit(comment: Comments) {
    this._CommentsService.createComment(this.commentsCreateForm.value, comment.ProfileID).subscribe(data => {
    })
  }
}
