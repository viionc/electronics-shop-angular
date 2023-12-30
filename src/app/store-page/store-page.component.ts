import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-store-page',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './store-page.component.html',
  styleUrl: './store-page.component.css',
})
export class StorePageComponent {}
