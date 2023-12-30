import { Component } from '@angular/core';
import { categories } from '../../../data/products';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  categories = categories;
}
