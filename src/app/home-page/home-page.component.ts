import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { LandingComponent } from './landing/landing.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, LandingComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
