import { Component } from '@angular/core';
import { CartComponent } from './cart/cart.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CloseButtonComponent } from '../close-button/close-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    CartComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CloseButtonComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  showCart = false;
  showMenu = false;

  handleCart() {
    this.showCart = !this.showCart;
  }

  handleMenu() {
    this.showMenu = !this.showMenu;
  }
}
