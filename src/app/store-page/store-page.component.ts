import { Component } from '@angular/core';
import { CategoriesComponent } from './categories/categories.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../other-components/footer/footer.component';
import { HeaderComponent } from '../other-components/header/header.component';
import { StoreComponent } from './store/store.component';

@Component({
  selector: 'app-store-page',
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent,
    HeaderComponent,
    CategoriesComponent,
    StoreComponent,
  ],
  templateUrl: './store-page.component.html',
  styleUrl: './store-page.component.css',
})
export class StorePageComponent {}
