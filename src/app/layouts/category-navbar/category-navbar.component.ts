import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { CategoriesService } from '../../services/categories.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './category-navbar.component.html',
  styleUrl: './category-navbar.component.css'
})
export class CategoryNavbarComponent {
  categoryArray : Array<any> = [];

  constructor(private categoryService: CategoriesService){}

  ngOnInit(): void{
    this.categoryService.loadData().subscribe( val => this.categoryArray = val);
  }
}
