import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from '../../../models/common/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() BtnProps: Button | undefined;
  @Input() ClassProp: string | undefined;
  @Input() ClassStyles: string | undefined;
  @Output() action: EventEmitter<any> = new EventEmitter();

  actionMethod() {
    this.action.emit();
  }
}
