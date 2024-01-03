import { Component } from '@angular/core';
import { FooterComponent } from '../other-components/footer/footer.component';
import { HeaderComponent } from '../other-components/header/header.component';
import { LandingComponent } from './landing/landing.component';
import { DiscountsComponent } from './discounts/discounts.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    LandingComponent,
    DiscountsComponent,
  ],
})
export class HomePageComponent {}
