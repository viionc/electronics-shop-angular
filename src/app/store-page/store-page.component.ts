import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { StoreComponent } from './store/store.component';
import { CategoriesComponent } from './categories/categories.component';

@Component({
  selector: 'app-store-page',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    StoreComponent,
    CategoriesComponent,
  ],
  templateUrl: './store-page.component.html',
  styleUrl: './store-page.component.css',
})
export class StorePageComponent {}
