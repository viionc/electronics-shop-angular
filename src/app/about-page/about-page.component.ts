import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../other-components/header/header.component';
import { FooterComponent } from '../other-components/footer/footer.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {
  slideInFromLeft,
  slideInFromRight,
} from '../home-page/landing/landing.component';
import { trigger } from '@angular/animations';
import { RandomFactService } from '../../services/randomFact.service';

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
export class AboutPageComponent implements OnInit {
  randomFact: string = '';
  constructor(private ranndomFactService: RandomFactService) {}

  ngOnInit(): void {
    this.fetchRandomFact();
  }

  fetchRandomFact() {
    this.ranndomFactService.getRandomFact().subscribe((data) => {
      this.randomFact = (data as RandomFactProps).text;
    });
  }
}
interface RandomFactProps {
  text: string;
}
