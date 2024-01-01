import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StorePageComponent } from './store-page/store-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [
    RouterOutlet,
    HomePageComponent,
    StorePageComponent,
    AboutPageComponent,
  ],
})
export class AppComponent {}
