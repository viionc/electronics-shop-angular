import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../other-components/header/header.component';
import { FooterComponent } from '../other-components/footer/footer.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {
  slideInFromLeft,
  slideInFromRight,
} from '../home-page/landing/landing.component';
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css',
  animations: [
    trigger('slideFromLeft', [slideInFromLeft]),
    trigger('slideFromRight', [slideInFromRight]),
  ],
})
export class AboutPageComponent {}
