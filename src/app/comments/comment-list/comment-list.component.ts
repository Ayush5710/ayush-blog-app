import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CommonModule } from '@angular/common';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-comment-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comment-list.component.html',
  styleUrl: './comment-list.component.css'
})
export class CommentListComponent {
  commentList: any[] = [];
  postId: any;

  constructor(private postService: PostService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.postId = params.get('postId');
        return this.postService.loadPostComments(this.postId);
      })
    ).subscribe((comments: any[]) => {
      this.commentList = comments;
    });
  }

  
}
