import { Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { StorePageComponent } from './store-page/store-page.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'store', component: StorePageComponent },
  { path: 'about', component: AboutPageComponent },
];
