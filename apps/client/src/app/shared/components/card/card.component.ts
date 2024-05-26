import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input()
  public title: string | any = '';

  @Input()
  public description: string | any = '';

  @Input()
  public imgUrl: string | any = '';

  @Output()
  public onDelete: EventEmitter<any> = new EventEmitter();

  @Output()
  public onEdit: EventEmitter<any> = new EventEmitter();

  constructor() {}
}
