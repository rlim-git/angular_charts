import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title!: string;
  @Output() removeCard = new EventEmitter<void>();

  onRemoveClick() {
    this.removeCard.emit();
  }
}
