import { Component } from '@angular/core';
import { PostCardComponent } from '../../layouts/post-card/post-card.component';
import { CommentFormComponent } from '../../comments/comment-form/comment-form.component';
import { CommentListComponent } from '../../comments/comment-list/comment-list.component';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { pipe } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [PostCardComponent, CommentFormComponent, CommentListComponent, CommonModule],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css'
})
export class SinglePostComponent {

  postData !: any;
  similarPosts !: Array<Object>

  constructor(private route: ActivatedRoute, private postService: PostService){
    this.route.params.subscribe(val => {
      this.postService.countViews(val['postId'])
      this.postService.loadSinglePost(val['postId']).subscribe(post => {
        this.postData = post
        this.loadSimilarPosts(this.postData.category.categoryId);
      })
    })
  }

  loadSimilarPosts(catId: string){
    this.postService.loadSimilarPosts(catId).subscribe(val => this.similarPosts = val)
  }
}
