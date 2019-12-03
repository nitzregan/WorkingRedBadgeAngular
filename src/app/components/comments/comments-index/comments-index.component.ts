import { Component, OnInit, Input } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';
import { ActivatedRoute } from '@angular/router';
import { Comments } from 'src/app/models/Comments';
@Component({
  selector: 'app-comments-index',
  templateUrl: './comments-index.component.html',
  styleUrls: ['./comments-index.component.css']
})
export class CommentsIndexComponent implements OnInit {
  Comments;

  @Input() test:any;

  constructor(private commentsService: CommentsService, private _activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    console.log(this.test)
    this._activatedRoute.paramMap.subscribe(routerData => {
      this.commentsService.getCommentsByProfile(this.test).subscribe((comments: Comments[])=>{
        console.log(comments);
        this.Comments=comments;
      });
      });
  }
}