import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-close-button',
  template: ` <button class="close" (click)="emit()">
    <img src="./assets/icons/close.svg" alt="close cart" />
  </button>`,
  standalone: true,
  styleUrl: './close-button.component.css',
})
export class CloseButtonComponent {
  @Output() EmitEvent = new EventEmitter();

  emit() {
    this.EmitEvent.emit();
  }
}
