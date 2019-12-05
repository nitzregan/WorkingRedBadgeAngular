import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../../services/comments.service';
import { Comments } from '../../../models/comments';
import { ActivatedRoute, Router } from '@angular/router';
// import { CommentsIndexComponent } from '../comments-index/comments-index.component';
@Component({
  selector: 'app-comments-delete',
  templateUrl: './comments-delete.component.html',
  styleUrls: ['./comments-delete.component.css']
})
export class CommentsDeleteComponent implements OnInit {
  comments: Comments;
  constructor(private activatedRoute: ActivatedRoute, private commentsService: CommentsService, private router: Router) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.commentsService.getCommentsByID(params.get('CommentID')).subscribe((comments: Comments) => {
        this.comments = comments;
      });
    });
   }
  ngOnInit() {
  }
  onDelete() {
    this.commentsService.deleteComment(this.comments.CommentID).subscribe(() => {
      this.router.navigate([`/profile/get-profile/${localStorage.getItem("UserID")}`]);

    });
  }
}
