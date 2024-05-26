import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CopyClipboardDirective } from '../../directives/copy-clipboard.directive';

@Component({
  selector: 'app-input-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CopyClipboardDirective],
  templateUrl: './input-password.component.html',
  styleUrl: './input-password.component.scss',
})
export class InputPasswordComponent {
  @Input() public control!: FormControl;
  @Input() public label!: string;

  protected fieldTextType!: boolean;

  public toggleFieldTextType(): void {
    this.fieldTextType = !this.fieldTextType;
  }
}
