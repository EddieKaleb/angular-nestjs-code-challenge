import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ModalComponent implements OnInit, OnChanges {
  @Input() public isOpen = false;

  private element: any;

  constructor(private el: ElementRef) {
    this.element = el.nativeElement;
  }

  public ngOnInit(): void {
    document.body.appendChild(this.element);
  }

  public ngOnChanges(): void {
    this.isOpen ? this.open() : this.close();
  }

  public open(): void {
    this.element.style.display = 'block';
    document.body.classList.add('modal-open');
  }

  public close(): void {
    this.element.style.display = 'none';
    document.body.classList.remove('modal-open');
  }
}
