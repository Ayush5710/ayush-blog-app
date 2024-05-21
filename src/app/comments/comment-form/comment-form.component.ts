import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.css'
})
export class CommentFormComponent {
  postId !: string;
  commentForm !: any;
    constructor(private route: ActivatedRoute, private postService: PostService, private fb: FormBuilder){
      this.route.params.subscribe(val => {
        this.postId = val['postId']
      })

      this.commentForm = this.fb.group({
        name: ['', Validators.required],
        comment: ['', Validators.required]
      })
    }

    get fc(){
      return this.commentForm.controls;
    }

    onSubmit(commentData: any){
      const actualData = {
        "name" : commentData.name,
        "comment" :commentData.comment,
        "postId": this.postId,
        "created_at": new Date()

      }
      this.postService.addComment(actualData)
      this.commentForm.reset();
    }


}
