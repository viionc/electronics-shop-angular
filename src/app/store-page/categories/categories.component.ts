import { Component, EventEmitter, Output } from '@angular/core';
import { Category, categories } from '../../../data/products';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  @Output() EmitEvent = new EventEmitter<Category | null>();
  currentCategory: Category | null = null;
  categories = categories;

  changeCategory(category: Category | null) {
    if (category === this.currentCategory) {
      this.currentCategory = null;
    } else {
      this.currentCategory = category;
    }
    this.EmitEvent.emit(this.currentCategory);
  }
}
