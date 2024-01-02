import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {
  trigger,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

const fadeIn = transition(':enter', [
  style({ opacity: 0.4 }),
  animate('0.5s', style({ opacity: 1 })),
]);

export const slideInFromLeft = transition(':enter', [
  style({ transform: 'translateX(-50%)' }),
  animate('0.5s', style({ transform: 'translateX(0)' })),
]);

export const slideInFromRight = transition(':enter', [
  style({ transform: 'translateX(50%)' }),
  animate('0.5s', style({ transform: 'translateX(0)' })),
]);

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  animations: [
    trigger('fadeIn', [fadeIn]),
    trigger('slideInFromLeft', [slideInFromLeft]),
    trigger('slideInFromRight', [slideInFromRight]),
  ],
})
export class LandingComponent {}
