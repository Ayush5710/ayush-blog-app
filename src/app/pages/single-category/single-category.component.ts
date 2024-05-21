import { Component } from '@angular/core';
import { PostCardComponent } from '../../layouts/post-card/post-card.component';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-category',
  standalone: true,
  imports: [PostCardComponent, CommonModule],
  templateUrl: './single-category.component.html',
  styleUrl: './single-category.component.css'
})
export class SingleCategoryComponent {
  postArray!: Array<Object>;
  categoryName!: string;

  constructor(private route: ActivatedRoute, private postService: PostService){
    this.route.params.subscribe((val: any) => {
      this.categoryName = val.categoryName;
      this.postService.loadSingleCategory(val.id).subscribe(post => this.postArray = post)
    })
  }
}
