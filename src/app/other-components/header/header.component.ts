import { Component } from '@angular/core';
import { CartComponent } from './cart/cart.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CartComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isOpen = false;

  handleCart() {
    this.isOpen = !this.isOpen;
  }
}
