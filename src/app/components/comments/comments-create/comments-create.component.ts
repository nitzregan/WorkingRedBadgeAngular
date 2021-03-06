import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CommentsService } from '../../../services/comments.service';
import { Comments } from '../../../models/comments';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-comments-create',
  templateUrl: './comments-create.component.html',
  styleUrls: ['./comments-create.component.css']
})
export class CommentsCreateComponent implements OnInit {
  comment: Comments;
  commentsCreateForm: FormGroup;

  @Input() test:any;
  
  constructor(private _form: FormBuilder, private _CommentsService: CommentsService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.createForm();
  }
  ngOnInit() {
    console.log(this.test)
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
      this._CommentsService.createComment(this.commentsCreateForm.value, this.test).subscribe(data => {
        this.comment=comment;
        this.router.navigate([`/profile/get-profile/${localStorage.getItem('UserID')}`]  );
      });
      })
  }
}
