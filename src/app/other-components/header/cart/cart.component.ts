import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  styleUrl: 'cart.component.css',
  imports: [CommonModule],
  template: `
    <article [class]="isOpen ? 'show' : ''">
      <div class="wrapper">
        <button (click)="handleCart()">x</button>
        <h2>Items in your cart:</h2>
      </div>
    </article>
  `,
})
export class CartComponent {
  @Input() isOpen!: boolean;
  @Output() EmitEvent = new EventEmitter();

  handleCart() {
    this.EmitEvent.emit();
  }
}
